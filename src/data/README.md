# Data Files

Each make gets its own JSON file:

- `holden.json`
- `ford.json`
- `hsv.json`
- etc.

## Schema

```json
{
  "make": "Holden",
  "models": {
    "Commodore": {
      "VB": {
        "SL/E": {
          "hp": 130, "tq": 217, "z1": null, "qm": null,
          "ts": 185, "fc": null, "fh": null, "fx": null,
          "wt": 1360, "pr": null,
          "eng": "3.3L I6", "trans": "3sp Auto", "drive": "RWD",
          "body": "Sedan"
        }
      }
    }
  }
}
```

## Spec Keys
| Key | Meaning | Unit |
|-----|---------|------|
| hp  | Power   | kW or hp |
| tq  | Torque  | Nm |
| z1  | 0-100   | sec |
| qm  | 1/4 mile | sec |
| ts  | Top speed | km/h |
| fc  | Fuel combined | L/100km |
| fh  | Fuel highway | L/100km |
| fx  | Fuel extra-urban | L/100km |
| wt  | Kerb weight | kg |
| pr  | Price new | AUD |
