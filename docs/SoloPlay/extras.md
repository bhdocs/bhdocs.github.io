---
sidebar_position: 7
---

# Extras

- Navigate to [libs\SoloPlay\Tools\Developer.js](https://github.com/blizzhackers/kolbot-SoloPlay/blob/restructuring/libs/SoloPlay/Tools/Developer.js) for extra options
- Developer.js includes options such as:
  - plugyMode toggle (allow use of larger stash when using the Mod PlugY)
  - logging equipped items to D2Bot# Char Viewer tab
  - Overlay toggle
  - logPerformance toggle
  - fillAccount toggle for Socketmule/Bumper mode
    - if set to true and running Socketmule/Bumper mode once goal is reached bot restarts with a new character until account is full
  - Packet casting (casting animations) toggle
  - developerMode (load up profile in SoloPlay mode without starting scripts)
  - Debugging (auto-equip, crafting, junkCheck information printed to console)
  - stopAtLevel option (enter a profile and level to stop it once it meets the requirment)

## Single Player Additons
- Enable ladder runewords
  - Close D2Bot# then copy and paste the following into data/patch.json
    - `{"Name": "ladderrunewords", "Version":"1.14d","Module":14,"Offset":1452043, "Data": "kJCQkJCQkJCQkJCQkJCQkJCQkJA="}`
- Regenerate map each game
  - Close D2Bot# then copy and paste the following into data/patch.json
    - `{"Name": "regenmaps", "Version": "1.14d", "Module": 14, "Offset": 1483264, "Data": "6w=="}`

:::note
After re-launching D2Bot# a message will appear at the top saying *UPDATE AVAILABLE*, ignore this message there is no update. The application sees that patch.json is different than the standard download.
:::