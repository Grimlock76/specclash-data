#!/usr/bin/env node
// patch-perf-cargo.cjs
// Adds acceleration (z1), topSpeed (ts), quarterMile (qm), cargo (ca) fields
// to all new-format supplement specs (s30–s40).

const fs = require('fs')

// ─── Cargo volumes by Make|Model (liters, rear seats up) ─────────────────────
const CARGO = {
  // Nissan s30
  'Nissan|Silvia':   200,
  'Nissan|180SX':    200,
  'Nissan|200SX':    210,
  'Nissan|240Z':     180,
  'Nissan|280ZX':    175,
  'Nissan|Stagea':   800,
  'Nissan|Leaf':     420,
  'Nissan|Kicks':    423,
  'Nissan|Ariya':    415,
  'Nissan|Juke':     354,
  // Mitsubishi s31
  'Mitsubishi|Pajero Sport': 505,
  'Mitsubishi|Lancer':       360,
  'Mitsubishi|Colt':         275,
  'Mitsubishi|Grandis':      130,
  // Hyundai s32
  'Hyundai|Excel':         310,
  'Hyundai|Getz':          235,
  'Hyundai|Accent':        450,
  'Hyundai|i20':           326,
  'Hyundai|i30':           395,
  'Hyundai|i30 N':         395,
  'Hyundai|Elantra':       402,
  'Hyundai|i45':           462,
  'Hyundai|Sonata':        510,
  'Hyundai|i40':           515,
  'Hyundai|Veloster':      361,
  'Hyundai|Coupe':         340,
  'Hyundai|Genesis Coupe': 315,
  'Hyundai|Terracan':      900,
  'Hyundai|ix35':          591,
  'Hyundai|Tucson':        540,
  'Hyundai|Santa Fe':      547,
  'Hyundai|Kona':          374,
  'Hyundai|Ioniq':         443,
  'Hyundai|Ioniq 5':       531,
  'Hyundai|Ioniq 6':       401,
  'Hyundai|Palisade':      509,
  'Hyundai|Staria':        635,
  // Kia s33
  'Kia|Sportage':   503,
  'Kia|Sorento':    604,
  'Kia|Rio':        325,
  'Kia|Cerato':     402,
  'Kia|Carnival':   627,
  'Kia|Stinger':    406,
  'Kia|EV6':        490,
  'Kia|Seltos':     433,
  'Kia|Niro':       427,
  'Kia|Picanto':    255,
  'Kia|Soul':       315,
  'Kia|Optima':     510,
  'Kia|Telluride':  571,
  // VW s36
  'Volkswagen|Golf':        380,
  'Volkswagen|Golf Wagon':  605,
  'Volkswagen|Polo':        351,
  'Volkswagen|Passat':      586,
  'Volkswagen|Tiguan':      615,
  'Volkswagen|Touareg':     810,
  'Volkswagen|Amarok':      null, // ute
  'Volkswagen|T-Roc':       445,
  'Volkswagen|Multivan':    null, // van, variable
  'Volkswagen|Beetle':      310,
  'Volkswagen|Jetta':       510,
  'Volkswagen|Scirocco':    312,
  'Volkswagen|Arteon':      563,
  'Volkswagen|ID.4':        543,
  // VW s40
  'Volkswagen|ID.3':        385,
  'Volkswagen|ID.5':        549,
  // BMW s37
  'BMW|1 Series':  370,
  'BMW|2 Series':  390,
  'BMW|3 Series':  480,
  'BMW|5 Series':  530,
  'BMW|7 Series':  515,
  'BMW|X1':        505,
  'BMW|X3':        550,
  'BMW|X5':        650,
  'BMW|Z4':        281,
  // BMW s39
  'BMW|4 Series':  385,
  'BMW|M2':        390,
  'BMW|M4':        440,
  'BMW|X2':        470,
  'BMW|X4':        525,
  'BMW|X6':        580,
  'BMW|X7':        750,
  'BMW|i3':        260,
  'BMW|i4':        470,
  'BMW|iX':        500,
  'BMW|iX3':       510,
}

// ─── Performance lookup: [trimRegex, { acceleration, topSpeed, quarterMile }]
// acceleration = 0-100 km/h (seconds), topSpeed = km/h, quarterMile = string
// Applied in order; first match wins. 'null' means no data available.
const PERF = {
  // ── Nissan s30 ──────────────────────────────────────────────────────────
  'Nissan|Silvia': [
    [/Spec-R/i,   { acceleration: 6.8, topSpeed: 230, quarterMile: '~14.8 sec' }],
    [/Spec-S/i,   { acceleration: 8.5, topSpeed: 210, quarterMile: '~16.5 sec' }],
    [/K's/i,      { acceleration: 7.5, topSpeed: 220, quarterMile: '~15.5 sec' }],
    [/Q's/i,      { acceleration: 9.0, topSpeed: 200, quarterMile: '~17.0 sec' }],
    [/Turbo|ZX/i, { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
    [/./,         { acceleration: 11.0, topSpeed: 175, quarterMile: '~18.5 sec' }],
  ],
  'Nissan|180SX': [
    [/Type X/i, { acceleration: 6.9, topSpeed: 225, quarterMile: '~15.0 sec' }],
    [/Type S/i, { acceleration: 9.0, topSpeed: 200, quarterMile: '~17.0 sec' }],
    [/./,       { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.5 sec' }],
  ],
  'Nissan|200SX': [
    [/./, { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
  ],
  'Nissan|240Z': [
    [/./, { acceleration: 8.0, topSpeed: 205, quarterMile: '~16.0 sec' }],
  ],
  'Nissan|280ZX': [
    [/Turbo/i, { acceleration: 8.5, topSpeed: 215, quarterMile: '~16.5 sec' }],
    [/./,      { acceleration: 10.5, topSpeed: 195, quarterMile: '~18.0 sec' }],
  ],
  'Nissan|Stagea': [
    [/260RS/i, { acceleration: 5.6, topSpeed: 250, quarterMile: '~14.0 sec' }],
    [/250RS/i, { acceleration: 7.5, topSpeed: 230, quarterMile: '~15.8 sec' }],
    [/./,      { acceleration: 8.5, topSpeed: 210, quarterMile: '~16.5 sec' }],
  ],
  'Nissan|Leaf': [
    [/e\+|e-Plus/i, { acceleration: 6.5, topSpeed: 157 }],
    [/ST\+/i,       { acceleration: 7.9, topSpeed: 150 }],
    [/./,           { acceleration: 8.5, topSpeed: 144 }],
  ],
  'Nissan|Kicks': [
    [/./, { acceleration: 12.3, topSpeed: 165, quarterMile: '~18.5 sec' }],
  ],
  'Nissan|Ariya': [
    [/e-4ORCE|AWD/i, { acceleration: 5.7, topSpeed: 200 }],
    [/Engage\+/i,    { acceleration: 7.5, topSpeed: 160 }],
    [/./,            { acceleration: 7.5, topSpeed: 160 }],
  ],
  'Nissan|Juke': [
    [/./, { acceleration: 10.3, topSpeed: 180, quarterMile: '~17.8 sec' }],
  ],

  // ── Mitsubishi s31 ───────────────────────────────────────────────────────
  'Mitsubishi|Pajero Sport': [
    [/./, { acceleration: 10.5, topSpeed: 175, quarterMile: '~18.0 sec' }],
  ],
  'Mitsubishi|Lancer': [
    [/Ralliart/i,   { acceleration: 6.3, topSpeed: 240, quarterMile: '~14.6 sec' }],
    [/Sportback/i,  { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.5 sec' }],
    [/./,           { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Mitsubishi|Colt': [
    [/CZT/i, { acceleration: 8.0, topSpeed: 195, quarterMile: '~16.3 sec' }],
    [/./,    { acceleration: 10.5, topSpeed: 175, quarterMile: '~18.0 sec' }],
  ],
  'Mitsubishi|Grandis': [
    [/./, { acceleration: 11.5, topSpeed: 180, quarterMile: '~18.8 sec' }],
  ],

  // ── Hyundai s32 ─────────────────────────────────────────────────────────
  'Hyundai|Excel': [
    [/./, { acceleration: 13.5, topSpeed: 155, quarterMile: '~19.5 sec' }],
  ],
  'Hyundai|Getz': [
    [/1\.6/i, { acceleration: 10.5, topSpeed: 175, quarterMile: '~18.0 sec' }],
    [/./,     { acceleration: 12.0, topSpeed: 160, quarterMile: '~19.0 sec' }],
  ],
  'Hyundai|Accent': [
    [/Sport/i, { acceleration: 8.5, topSpeed: 190, quarterMile: '~16.5 sec' }],
    [/./,      { acceleration: 10.5, topSpeed: 175, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|i20': [
    [/N Line/i, { acceleration: 9.0, topSpeed: 185, quarterMile: '~17.0 sec' }],
    [/./,       { acceleration: 11.0, topSpeed: 170, quarterMile: '~18.5 sec' }],
  ],
  'Hyundai|i30': [
    [/N$/i,         { acceleration: 6.1, topSpeed: 250, quarterMile: '~14.4 sec' }],
    [/N Line/i,     { acceleration: 7.5, topSpeed: 230, quarterMile: '~15.5 sec' }],
    [/./,           { acceleration: 10.5, topSpeed: 190, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|i30 N': [
    [/Performance/i, { acceleration: 5.9, topSpeed: 250, quarterMile: '~14.2 sec' }],
    [/./,            { acceleration: 6.1, topSpeed: 250, quarterMile: '~14.4 sec' }],
  ],
  'Hyundai|Elantra': [
    [/Sport/i, { acceleration: 6.9, topSpeed: 225, quarterMile: '~15.2 sec' }],
    [/N$/i,    { acceleration: 5.3, topSpeed: 250, quarterMile: '~13.8 sec' }],
    [/./,      { acceleration: 10.0, topSpeed: 185, quarterMile: '~17.5 sec' }],
  ],
  'Hyundai|i45': [
    [/./, { acceleration: 9.0, topSpeed: 200, quarterMile: '~17.0 sec' }],
  ],
  'Hyundai|Sonata': [
    [/N Line/i, { acceleration: 7.5, topSpeed: 225, quarterMile: '~15.8 sec' }],
    [/./,       { acceleration: 9.5, topSpeed: 200, quarterMile: '~17.3 sec' }],
  ],
  'Hyundai|i40': [
    [/./, { acceleration: 10.0, topSpeed: 195, quarterMile: '~17.8 sec' }],
  ],
  'Hyundai|Veloster': [
    [/N$/i,    { acceleration: 5.7, topSpeed: 250, quarterMile: '~14.0 sec' }],
    [/Turbo/i, { acceleration: 7.0, topSpeed: 225, quarterMile: '~15.3 sec' }],
    [/./,      { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|Coupe': [
    [/2\.7/i, { acceleration: 7.5, topSpeed: 210, quarterMile: '~15.7 sec' }],
    [/./,     { acceleration: 9.0, topSpeed: 195, quarterMile: '~17.0 sec' }],
  ],
  'Hyundai|Genesis Coupe': [
    [/3\.8/i, { acceleration: 6.3, topSpeed: 240, quarterMile: '~14.6 sec' }],
    [/./,     { acceleration: 7.5, topSpeed: 225, quarterMile: '~15.6 sec' }],
  ],
  'Hyundai|Terracan': [
    [/./, { acceleration: 11.5, topSpeed: 170, quarterMile: '~19.0 sec' }],
  ],
  'Hyundai|ix35': [
    [/./, { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|Tucson': [
    [/N Line.*Turbo|2\.5T/i, { acceleration: 7.5, topSpeed: 220, quarterMile: '~15.7 sec' }],
    [/./,                    { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|Santa Fe': [
    [/./, { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
  ],
  'Hyundai|Kona': [
    [/N$/i,    { acceleration: 5.5, topSpeed: 240, quarterMile: '~14.0 sec' }],
    [/Electric/i, { acceleration: 7.9, topSpeed: 167 }],
    [/./,      { acceleration: 10.3, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Hyundai|Ioniq': [
    [/Electric/i, { acceleration: 9.9, topSpeed: 165 }],
    [/Plug-in/i,  { acceleration: 10.6, topSpeed: 178 }],
    [/./,         { acceleration: 11.1, topSpeed: 175, quarterMile: '~18.5 sec' }],
  ],
  'Hyundai|Ioniq 5': [
    [/AWD|Ultimate AWD/i, { acceleration: 5.1, topSpeed: 185 }],
    [/./,                 { acceleration: 8.5, topSpeed: 185 }],
  ],
  'Hyundai|Ioniq 6': [
    [/AWD/i, { acceleration: 5.1, topSpeed: 185 }],
    [/./,    { acceleration: 7.4, topSpeed: 185 }],
  ],
  'Hyundai|Palisade': [
    [/./, { acceleration: 9.0, topSpeed: 195, quarterMile: '~17.0 sec' }],
  ],
  'Hyundai|Staria': [
    [/./, { acceleration: 11.5, topSpeed: 180, quarterMile: '~19.0 sec' }],
  ],

  // ── Kia s33 ─────────────────────────────────────────────────────────────
  'Kia|Sportage': [
    [/GT-Line.*Turbo|2\.5T/i, { acceleration: 7.5, topSpeed: 210, quarterMile: '~15.8 sec' }],
    [/./,                     { acceleration: 10.8, topSpeed: 185, quarterMile: '~18.2 sec' }],
  ],
  'Kia|Sorento': [
    [/GT-Line/i, { acceleration: 8.5, topSpeed: 200, quarterMile: '~16.5 sec' }],
    [/./,        { acceleration: 10.0, topSpeed: 185, quarterMile: '~17.8 sec' }],
  ],
  'Kia|Rio': [
    [/GT-Line/i, { acceleration: 9.5, topSpeed: 190, quarterMile: '~17.3 sec' }],
    [/./,        { acceleration: 11.5, topSpeed: 175, quarterMile: '~18.8 sec' }],
  ],
  'Kia|Cerato': [
    [/GT/i, { acceleration: 6.5, topSpeed: 230, quarterMile: '~14.9 sec' }],
    [/./,   { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Kia|Carnival': [
    [/./, { acceleration: 11.5, topSpeed: 185, quarterMile: '~18.8 sec' }],
  ],
  'Kia|Stinger': [
    [/GT Sport/i, { acceleration: 4.7, topSpeed: 270, quarterMile: '~13.1 sec' }],
    [/GT$/i,      { acceleration: 4.9, topSpeed: 270, quarterMile: '~13.3 sec' }],
    [/GT-Line/i,  { acceleration: 6.0, topSpeed: 210, quarterMile: '~14.5 sec' }],
    [/./,         { acceleration: 6.0, topSpeed: 210, quarterMile: '~14.5 sec' }],
  ],
  'Kia|EV6': [
    [/GT$/i,        { acceleration: 3.5, topSpeed: 260 }],
    [/GT-Line AWD/i,{ acceleration: 5.1, topSpeed: 188 }],
    [/Earth/i,      { acceleration: 7.3, topSpeed: 185 }],
    [/Air/i,        { acceleration: 8.5, topSpeed: 185 }],
    [/./,           { acceleration: 7.3, topSpeed: 185 }],
  ],
  'Kia|Seltos': [
    [/./, { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Kia|Niro': [
    [/EV|Electric/i, { acceleration: 7.8, topSpeed: 167 }],
    [/Plug-in/i,     { acceleration: 9.8, topSpeed: 167 }],
    [/./,            { acceleration: 11.0, topSpeed: 175, quarterMile: '~18.5 sec' }],
  ],
  'Kia|Picanto': [
    [/GT|Turbo/i, { acceleration: 10.2, topSpeed: 180, quarterMile: '~17.8 sec' }],
    [/./,         { acceleration: 13.0, topSpeed: 162, quarterMile: '~19.8 sec' }],
  ],
  'Kia|Soul': [
    [/GT|Turbo/i,   { acceleration: 7.7, topSpeed: 193, quarterMile: '~15.8 sec' }],
    [/Electric|EV/i,{ acceleration: 7.6, topSpeed: 167 }],
    [/./,           { acceleration: 10.5, topSpeed: 185, quarterMile: '~18.0 sec' }],
  ],
  'Kia|Optima': [
    [/GT/i, { acceleration: 6.0, topSpeed: 225, quarterMile: '~14.5 sec' }],
    [/./,   { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
  ],
  'Kia|Telluride': [
    [/./, { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
  ],

  // ── VW s36 ───────────────────────────────────────────────────────────────
  'Volkswagen|Golf': [
    [/Clubsport/i,     { acceleration: 5.7, topSpeed: 250, quarterMile: '~14.1 sec' }],
    [/GTI Performance/i,{ acceleration: 6.2, topSpeed: 250, quarterMile: '~14.4 sec' }],
    [/\bR\b/i,         { acceleration: 4.9, topSpeed: 250, quarterMile: '~13.3 sec' }],
    [/GTI/i,           { acceleration: 6.3, topSpeed: 250, quarterMile: '~14.5 sec' }],
    [/R32/i,           { acceleration: 6.0, topSpeed: 250, quarterMile: '~14.3 sec' }],
    [/V6 4Motion/i,    { acceleration: 7.2, topSpeed: 221, quarterMile: '~15.5 sec' }],
    [/118TSI|110TSI|132TSI|140TSI/i, { acceleration: 8.5, topSpeed: 210, quarterMile: '~16.5 sec' }],
    [/103TDI|110TDI/i, { acceleration: 9.5, topSpeed: 200, quarterMile: '~17.3 sec' }],
    [/77TSI|90TSI|70TSI/i, { acceleration: 10.5, topSpeed: 190, quarterMile: '~18.0 sec' }],
    [/./,              { acceleration: 12.0, topSpeed: 175, quarterMile: '~19.0 sec' }],
  ],
  'Volkswagen|Golf Wagon': [
    [/\bR\b/i,  { acceleration: 5.1, topSpeed: 250, quarterMile: '~13.6 sec' }],
    [/GTI|155/i,{ acceleration: 6.5, topSpeed: 243, quarterMile: '~14.7 sec' }],
    [/118TSI|110TSI/i, { acceleration: 9.0, topSpeed: 208, quarterMile: '~17.0 sec' }],
    [/./,       { acceleration: 10.5, topSpeed: 195, quarterMile: '~18.0 sec' }],
  ],
  'Volkswagen|Polo': [
    [/GTI/i,   { acceleration: 6.7, topSpeed: 232, quarterMile: '~15.0 sec' }],
    [/81TSI/i, { acceleration: 9.5, topSpeed: 195, quarterMile: '~17.3 sec' }],
    [/66TSI/i, { acceleration: 10.8, topSpeed: 183, quarterMile: '~18.3 sec' }],
    [/./,      { acceleration: 12.0, topSpeed: 175, quarterMile: '~19.0 sec' }],
  ],
  'Volkswagen|Passat': [
    [/3\.2 V6|206TSI/i, { acceleration: 6.8, topSpeed: 237, quarterMile: '~15.2 sec' }],
    [/2\.0T|118TSI/i,   { acceleration: 8.5, topSpeed: 215, quarterMile: '~16.5 sec' }],
    [/TDI|2\.0 TDI/i,   { acceleration: 9.5, topSpeed: 213, quarterMile: '~17.3 sec' }],
    [/./,               { acceleration: 9.0, topSpeed: 215, quarterMile: '~17.0 sec' }],
  ],
  'Volkswagen|Tiguan': [
    [/162TSI|Sportline/i,  { acceleration: 7.5, topSpeed: 220, quarterMile: '~15.7 sec' }],
    [/132TSI/i,            { acceleration: 8.0, topSpeed: 210, quarterMile: '~16.3 sec' }],
    [/110TSI|118TSI/i,     { acceleration: 9.5, topSpeed: 200, quarterMile: '~17.3 sec' }],
    [/103TDI|110TDI/i,     { acceleration: 10.0, topSpeed: 195, quarterMile: '~17.8 sec' }],
    [/./,                  { acceleration: 10.0, topSpeed: 195, quarterMile: '~17.8 sec' }],
  ],
  'Volkswagen|Touareg': [
    [/4\.2 V8/i,    { acceleration: 6.2, topSpeed: 240, quarterMile: '~14.4 sec' }],
    [/190TSI/i,     { acceleration: 7.0, topSpeed: 220, quarterMile: '~15.4 sec' }],
    [/3\.2 V6/i,    { acceleration: 7.8, topSpeed: 220, quarterMile: '~16.0 sec' }],
    [/150TDI/i,     { acceleration: 9.5, topSpeed: 205, quarterMile: '~17.3 sec' }],
    [/./,           { acceleration: 8.5, topSpeed: 215, quarterMile: '~16.5 sec' }],
  ],
  'Volkswagen|Amarok': [
    [/V6|580Nm/i,   { acceleration: 7.9, topSpeed: 213, quarterMile: '~16.0 sec' }],
    [/./,           { acceleration: 10.5, topSpeed: 195, quarterMile: '~18.0 sec' }],
  ],
  'Volkswagen|T-Roc': [
    [/\bR\b/i,   { acceleration: 4.9, topSpeed: 250, quarterMile: '~13.4 sec' }],
    [/140TSI/i,  { acceleration: 7.1, topSpeed: 220, quarterMile: '~15.4 sec' }],
    [/./,        { acceleration: 9.5, topSpeed: 200, quarterMile: '~17.3 sec' }],
  ],
  'Volkswagen|Multivan': [
    [/./, { acceleration: 11.0, topSpeed: 195, quarterMile: '~18.5 sec' }],
  ],
  'Volkswagen|Beetle': [
    [/Turbo S|2\.0 TSI R-Line/i, { acceleration: 7.0, topSpeed: 224, quarterMile: '~15.4 sec' }],
    [/1\.4 TSI/i,                { acceleration: 9.0, topSpeed: 200, quarterMile: '~17.0 sec' }],
    [/1\.2 TSI/i,                { acceleration: 11.5, topSpeed: 179, quarterMile: '~18.8 sec' }],
    [/./,                        { acceleration: 10.5, topSpeed: 190, quarterMile: '~18.0 sec' }],
  ],
  'Volkswagen|Jetta': [
    [/155TSI|Sportline/i, { acceleration: 7.0, topSpeed: 224, quarterMile: '~15.4 sec' }],
    [/./,                 { acceleration: 9.0, topSpeed: 205, quarterMile: '~17.0 sec' }],
  ],
  'Volkswagen|Scirocco': [
    [/\bR\b/i,   { acceleration: 5.9, topSpeed: 250, quarterMile: '~14.2 sec' }],
    [/155TSI/i,  { acceleration: 7.2, topSpeed: 224, quarterMile: '~15.5 sec' }],
    [/./,        { acceleration: 9.0, topSpeed: 205, quarterMile: '~17.0 sec' }],
  ],
  'Volkswagen|Arteon': [
    [/Shooting Brake|206TSI R-Line/i, { acceleration: 6.0, topSpeed: 250, quarterMile: '~14.3 sec' }],
    [/./,                             { acceleration: 6.0, topSpeed: 250, quarterMile: '~14.3 sec' }],
  ],
  'Volkswagen|ID.4': [
    [/GTX/i, { acceleration: 6.2, topSpeed: 180 }],
    [/./,    { acceleration: 8.5, topSpeed: 160 }],
  ],
  // VW s40
  'Volkswagen|ID.3': [
    [/GTX|Pro S.*210|210/i, { acceleration: 5.7, topSpeed: 200 }],
    [/Pro S/i,              { acceleration: 7.9, topSpeed: 160 }],
    [/Pro$/i,               { acceleration: 7.3, topSpeed: 160 }],
    [/Pure/i,               { acceleration: 10.0, topSpeed: 150 }],
    [/./,                   { acceleration: 7.3, topSpeed: 160 }],
  ],
  'Volkswagen|ID.5': [
    [/GTX/i, { acceleration: 6.3, topSpeed: 180 }],
    [/./,    { acceleration: 8.4, topSpeed: 160 }],
  ],

  // ── BMW s37 ──────────────────────────────────────────────────────────────
  'BMW|1 Series': [
    [/M135i xDrive/i,    { acceleration: 4.8, topSpeed: 250, quarterMile: '~13.3 sec' }],
    [/M140i/i,           { acceleration: 4.6, topSpeed: 250, quarterMile: '~13.1 sec' }],
    [/130i/i,            { acceleration: 5.5, topSpeed: 250, quarterMile: '~13.9 sec' }],
    [/128ti/i,           { acceleration: 6.1, topSpeed: 250, quarterMile: '~14.3 sec' }],
    [/125i/i,            { acceleration: 7.1, topSpeed: 235, quarterMile: '~15.4 sec' }],
    [/120i/i,            { acceleration: 8.5, topSpeed: 220, quarterMile: '~16.5 sec' }],
    [/118i/i,            { acceleration: 9.1, topSpeed: 210, quarterMile: '~17.0 sec' }],
    [/116i/i,            { acceleration: 11.7, topSpeed: 196, quarterMile: '~18.8 sec' }],
    [/./,                { acceleration: 10.0, topSpeed: 205, quarterMile: '~17.8 sec' }],
  ],
  'BMW|2 Series': [
    [/M240i xDrive/i, { acceleration: 4.1, topSpeed: 250, quarterMile: '~12.7 sec' }],
    [/M240i/i,        { acceleration: 4.6, topSpeed: 250, quarterMile: '~13.1 sec' }],
    [/M2 Coupe/i,     { acceleration: 4.2, topSpeed: 250, quarterMile: '~12.8 sec' }],
    [/228i/i,         { acceleration: 5.9, topSpeed: 250, quarterMile: '~14.2 sec' }],
    [/220i/i,         { acceleration: 7.1, topSpeed: 235, quarterMile: '~15.4 sec' }],
    [/218i/i,         { acceleration: 8.3, topSpeed: 224, quarterMile: '~16.4 sec' }],
    [/./,             { acceleration: 8.0, topSpeed: 220, quarterMile: '~16.2 sec' }],
  ],
  'BMW|3 Series': [
    [/M3 Competition xDrive/i, { acceleration: 3.5, topSpeed: 290, quarterMile: '~11.8 sec' }],
    [/M3 Competition/i,        { acceleration: 3.9, topSpeed: 290, quarterMile: '~12.1 sec' }],
    [/M3/i,                    { acceleration: 4.2, topSpeed: 250, quarterMile: '~12.5 sec' }],
    [/M340i xDrive/i,          { acceleration: 4.4, topSpeed: 250, quarterMile: '~12.9 sec' }],
    [/340i/i,                  { acceleration: 4.8, topSpeed: 250, quarterMile: '~13.2 sec' }],
    [/335i/i,                  { acceleration: 5.0, topSpeed: 250, quarterMile: '~13.5 sec' }],
    [/330i xDrive/i,           { acceleration: 5.4, topSpeed: 250, quarterMile: '~13.8 sec' }],
    [/330i|330e/i,             { acceleration: 5.8, topSpeed: 250, quarterMile: '~14.1 sec' }],
    [/328i/i,                  { acceleration: 5.9, topSpeed: 250, quarterMile: '~14.2 sec' }],
    [/325i/i,                  { acceleration: 6.8, topSpeed: 240, quarterMile: '~15.1 sec' }],
    [/320d/i,                  { acceleration: 7.1, topSpeed: 237, quarterMile: '~15.4 sec' }],
    [/320i/i,                  { acceleration: 7.1, topSpeed: 235, quarterMile: '~15.4 sec' }],
    [/318i/i,                  { acceleration: 8.5, topSpeed: 224, quarterMile: '~16.5 sec' }],
    [/./,                      { acceleration: 8.0, topSpeed: 225, quarterMile: '~16.2 sec' }],
  ],
  'BMW|5 Series': [
    [/M5 Competition/i, { acceleration: 3.4, topSpeed: 305, quarterMile: '~11.6 sec' }],
    [/M5/i,             { acceleration: 3.9, topSpeed: 250, quarterMile: '~12.1 sec' }],
    [/M550i/i,          { acceleration: 3.9, topSpeed: 250, quarterMile: '~12.1 sec' }],
    [/540i/i,           { acceleration: 5.1, topSpeed: 250, quarterMile: '~13.5 sec' }],
    [/535i/i,           { acceleration: 5.5, topSpeed: 250, quarterMile: '~13.9 sec' }],
    [/530i|530e/i,      { acceleration: 6.2, topSpeed: 250, quarterMile: '~14.4 sec' }],
    [/528i/i,           { acceleration: 6.4, topSpeed: 245, quarterMile: '~14.6 sec' }],
    [/525i/i,           { acceleration: 7.0, topSpeed: 240, quarterMile: '~15.3 sec' }],
    [/520d/i,           { acceleration: 7.5, topSpeed: 235, quarterMile: '~15.7 sec' }],
    [/520i/i,           { acceleration: 8.0, topSpeed: 234, quarterMile: '~16.2 sec' }],
    [/./,               { acceleration: 7.5, topSpeed: 235, quarterMile: '~15.7 sec' }],
  ],
  'BMW|7 Series': [
    [/M760|760i/i, { acceleration: 3.8, topSpeed: 250, quarterMile: '~12.1 sec' }],
    [/750i/i,      { acceleration: 4.3, topSpeed: 250, quarterMile: '~12.6 sec' }],
    [/740i/i,      { acceleration: 5.3, topSpeed: 250, quarterMile: '~13.7 sec' }],
    [/730i/i,      { acceleration: 6.0, topSpeed: 250, quarterMile: '~14.3 sec' }],
    [/730d/i,      { acceleration: 6.5, topSpeed: 245, quarterMile: '~14.7 sec' }],
    [/./,          { acceleration: 6.0, topSpeed: 250, quarterMile: '~14.3 sec' }],
  ],
  'BMW|X1': [
    [/xDrive25i|xDrive28i/i, { acceleration: 7.0, topSpeed: 222, quarterMile: '~15.3 sec' }],
    [/xDrive20i|sDrive20i/i, { acceleration: 8.2, topSpeed: 213, quarterMile: '~16.3 sec' }],
    [/xDrive23i/i,           { acceleration: 7.8, topSpeed: 218, quarterMile: '~15.9 sec' }],
    [/sDrive18i|xDrive18i/i, { acceleration: 10.2, topSpeed: 197, quarterMile: '~17.8 sec' }],
    [/./,                    { acceleration: 9.5, topSpeed: 205, quarterMile: '~17.3 sec' }],
  ],
  'BMW|X3': [
    [/M Competition/i, { acceleration: 3.8, topSpeed: 285, quarterMile: '~12.1 sec' }],
    [/M40i/i,          { acceleration: 4.8, topSpeed: 250, quarterMile: '~13.2 sec' }],
    [/xDrive35i/i,     { acceleration: 5.5, topSpeed: 240, quarterMile: '~13.8 sec' }],
    [/xDrive28i|xDrive30i/i, { acceleration: 6.0, topSpeed: 235, quarterMile: '~14.3 sec' }],
    [/xDrive20i/i,     { acceleration: 8.2, topSpeed: 210, quarterMile: '~16.3 sec' }],
    [/3\.0i|3\.0d/i,   { acceleration: 7.5, topSpeed: 218, quarterMile: '~15.7 sec' }],
    [/2\.5i/i,         { acceleration: 9.5, topSpeed: 200, quarterMile: '~17.3 sec' }],
    [/./,              { acceleration: 8.0, topSpeed: 210, quarterMile: '~16.2 sec' }],
  ],
  'BMW|X5': [
    [/M Competition/i, { acceleration: 3.8, topSpeed: 290, quarterMile: '~12.1 sec' }],
    [/M50i|xDrive50i/i,{ acceleration: 4.3, topSpeed: 250, quarterMile: '~12.7 sec' }],
    [/xDrive48i/i,     { acceleration: 5.0, topSpeed: 245, quarterMile: '~13.4 sec' }],
    [/xDrive40i/i,     { acceleration: 5.3, topSpeed: 250, quarterMile: '~13.7 sec' }],
    [/xDrive35i/i,     { acceleration: 5.5, topSpeed: 243, quarterMile: '~13.9 sec' }],
    [/xDrive30i/i,     { acceleration: 6.3, topSpeed: 235, quarterMile: '~14.5 sec' }],
    [/3\.0i|4\.4i/i,   { acceleration: 7.0, topSpeed: 225, quarterMile: '~15.3 sec' }],
    [/3\.0d/i,         { acceleration: 8.0, topSpeed: 220, quarterMile: '~16.2 sec' }],
    [/./,              { acceleration: 7.0, topSpeed: 225, quarterMile: '~15.3 sec' }],
  ],
  'BMW|Z4': [
    [/M40i/i,        { acceleration: 4.1, topSpeed: 250, quarterMile: '~12.6 sec' }],
    [/sDrive30i/i,   { acceleration: 5.4, topSpeed: 250, quarterMile: '~13.8 sec' }],
    [/M Roadster/i,  { acceleration: 4.8, topSpeed: 250, quarterMile: '~13.2 sec' }],
    [/3\.0si|3\.0i/i,{ acceleration: 5.7, topSpeed: 250, quarterMile: '~14.1 sec' }],
    [/sDrive20i/i,   { acceleration: 7.0, topSpeed: 235, quarterMile: '~15.3 sec' }],
    [/2\.2i/i,       { acceleration: 7.8, topSpeed: 225, quarterMile: '~15.9 sec' }],
    [/./,            { acceleration: 7.0, topSpeed: 235, quarterMile: '~15.3 sec' }],
  ],

  // ── BMW s39 ──────────────────────────────────────────────────────────────
  'BMW|4 Series': [
    [/M4 Competition xDrive/i, { acceleration: 3.5, topSpeed: 290, quarterMile: '~11.8 sec' }],
    [/M4 Competition/i,        { acceleration: 3.9, topSpeed: 290, quarterMile: '~12.1 sec' }],
    [/M4/i,                    { acceleration: 4.2, topSpeed: 250, quarterMile: '~12.5 sec' }],
    [/M440i xDrive/i,          { acceleration: 4.5, topSpeed: 250, quarterMile: '~12.9 sec' }],
    [/M440i/i,                 { acceleration: 4.7, topSpeed: 250, quarterMile: '~13.1 sec' }],
    [/430i/i,                  { acceleration: 5.8, topSpeed: 250, quarterMile: '~14.1 sec' }],
    [/420d/i,                  { acceleration: 6.8, topSpeed: 233, quarterMile: '~15.1 sec' }],
    [/428i/i,                  { acceleration: 5.9, topSpeed: 250, quarterMile: '~14.2 sec' }],
    [/420i/i,                  { acceleration: 8.0, topSpeed: 235, quarterMile: '~16.2 sec' }],
    [/./,                      { acceleration: 7.0, topSpeed: 235, quarterMile: '~15.3 sec' }],
  ],
  'BMW|M2': [
    [/M2 Competition/i, { acceleration: 4.1, topSpeed: 250, quarterMile: '~12.5 sec' }],
    [/M2 Coupe/i,       { acceleration: 4.3, topSpeed: 250, quarterMile: '~12.7 sec' }],
    [/./,               { acceleration: 4.3, topSpeed: 250, quarterMile: '~12.7 sec' }],
  ],
  'BMW|M4': [
    [/M4 Competition xDrive/i, { acceleration: 3.5, topSpeed: 290, quarterMile: '~11.8 sec' }],
    [/M4 Competition/i,        { acceleration: 3.9, topSpeed: 290, quarterMile: '~12.1 sec' }],
    [/M4/i,                    { acceleration: 4.2, topSpeed: 250, quarterMile: '~12.5 sec' }],
    [/./,                      { acceleration: 4.2, topSpeed: 250, quarterMile: '~12.5 sec' }],
  ],
  'BMW|X2': [
    [/M35i xDrive|M35i/i, { acceleration: 4.9, topSpeed: 250, quarterMile: '~13.3 sec' }],
    [/xDrive20i/i,        { acceleration: 7.7, topSpeed: 215, quarterMile: '~15.9 sec' }],
    [/sDrive18i/i,        { acceleration: 10.0, topSpeed: 195, quarterMile: '~17.8 sec' }],
    [/./,                 { acceleration: 8.5, topSpeed: 210, quarterMile: '~16.5 sec' }],
  ],
  'BMW|X4': [
    [/M Competition/i, { acceleration: 3.8, topSpeed: 285, quarterMile: '~12.1 sec' }],
    [/M40i/i,          { acceleration: 4.9, topSpeed: 250, quarterMile: '~13.3 sec' }],
    [/xDrive35i/i,     { acceleration: 5.4, topSpeed: 240, quarterMile: '~13.8 sec' }],
    [/xDrive28i|xDrive30i/i, { acceleration: 6.1, topSpeed: 230, quarterMile: '~14.4 sec' }],
    [/xDrive20i/i,     { acceleration: 8.2, topSpeed: 210, quarterMile: '~16.3 sec' }],
    [/./,              { acceleration: 7.5, topSpeed: 220, quarterMile: '~15.7 sec' }],
  ],
  'BMW|X6': [
    [/M Competition/i, { acceleration: 3.8, topSpeed: 290, quarterMile: '~12.1 sec' }],
    [/M50i/i,          { acceleration: 4.3, topSpeed: 250, quarterMile: '~12.7 sec' }],
    [/xDrive40i/i,     { acceleration: 5.3, topSpeed: 250, quarterMile: '~13.7 sec' }],
    [/M50d/i,          { acceleration: 5.0, topSpeed: 250, quarterMile: '~13.4 sec' }],
    [/xDrive50i/i,     { acceleration: 4.9, topSpeed: 250, quarterMile: '~13.3 sec' }],
    [/xDrive35i/i,     { acceleration: 5.4, topSpeed: 243, quarterMile: '~13.8 sec' }],
    [/xDrive30d/i,     { acceleration: 7.0, topSpeed: 225, quarterMile: '~15.3 sec' }],
    [/./,              { acceleration: 6.5, topSpeed: 235, quarterMile: '~14.7 sec' }],
  ],
  'BMW|X7': [
    [/M60i/i,     { acceleration: 4.0, topSpeed: 250, quarterMile: '~12.4 sec' }],
    [/xDrive40i/i,{ acceleration: 5.5, topSpeed: 250, quarterMile: '~13.9 sec' }],
    [/xDrive30d/i,{ acceleration: 7.2, topSpeed: 225, quarterMile: '~15.5 sec' }],
    [/./,         { acceleration: 6.5, topSpeed: 235, quarterMile: '~14.7 sec' }],
  ],
  'BMW|i3': [
    [/./, { acceleration: 7.3, topSpeed: 150 }],
  ],
  'BMW|i4': [
    [/M50/i,    { acceleration: 3.9, topSpeed: 225 }],
    [/eDrive40/i,{ acceleration: 5.7, topSpeed: 190 }],
    [/./,       { acceleration: 5.7, topSpeed: 190 }],
  ],
  'BMW|iX': [
    [/M60/i,     { acceleration: 3.8, topSpeed: 250 }],
    [/xDrive50/i,{ acceleration: 4.6, topSpeed: 200 }],
    [/xDrive40/i,{ acceleration: 6.1, topSpeed: 200 }],
    [/./,        { acceleration: 6.1, topSpeed: 200 }],
  ],
  'BMW|iX3': [
    [/./, { acceleration: 6.8, topSpeed: 180 }],
  ],
}

// ─── Apply patches ─────────────────────────────────────────────────────────
const suppNums = [30, 31, 32, 33, 36, 37, 39, 40]

let totalPatched = 0, totalSkipped = 0

for (const n of suppNums) {
  const path = `src/data/supplement${n}.json`
  const supp = JSON.parse(fs.readFileSync(path, 'utf8'))
  let patched = 0

  for (const [key, spec] of Object.entries(supp.specs)) {
    // Skip old-format entries
    if (spec.en !== undefined) continue

    const parts = key.split('|')
    const make = parts[0], model = parts[1], trim = parts.slice(3).join('|')
    const mk = `${make}|${model}`

    // Cargo
    if (spec.cargo === undefined && CARGO[mk] !== undefined && CARGO[mk] !== null) {
      spec.cargo = CARGO[mk]
    }

    // Performance
    const rules = PERF[mk]
    if (rules) {
      const match = rules.find(([re]) => re.test(trim))
      if (match) {
        const data = match[1]
        if (data.acceleration !== undefined && spec.acceleration === undefined)
          spec.acceleration = data.acceleration
        if (data.topSpeed !== undefined && spec.topSpeed === undefined)
          spec.topSpeed = data.topSpeed
        if (data.quarterMile !== undefined && spec.quarterMile === undefined)
          spec.quarterMile = data.quarterMile
      }
    }

    patched++
  }

  fs.writeFileSync(path, JSON.stringify(supp, null, 2))
  console.log(`s${n}: patched ${patched} entries`)
  totalPatched += patched
}

console.log(`\nTotal patched: ${totalPatched}`)
