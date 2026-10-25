'use strict';
// supplement356.json — 2026-10-25: Kia Tasman 2025 — Carsales files the same
// TK MY26 dual-cab variants (same specs, same base prices) under 2025 as under
// 2026, so 2025 copies the 2026 lineup (gen255). Replaces stale rows ("GT-Line",
// "S", "SX+" ~ prices). Also X-Pro (both years): kerb 2237 < tare 2238 -> null.
const { writeLineups, existing } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const line = () => Object.fromEntries(MAKES.Kia.Tasman['2026'].map(t => [t,
  { ...existing('Kia', 'Tasman', 2026, t), ...(t === 'X-Pro' ? { weight: null } : {}) }]));

writeLineups(356, { 'Kia|Tasman|2025': line(), 'Kia|Tasman|2026': line() });
