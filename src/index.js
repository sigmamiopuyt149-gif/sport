{
  "name": "sports-day-live",
  "main": "src/index.js",
  "compatibility_date": "2025-01-01",
  "durable_objects": {
    "bindings": [{ "name": "SCOREBOARD", "class_name": "Scoreboard" }]
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["Scoreboard"] }]
}
