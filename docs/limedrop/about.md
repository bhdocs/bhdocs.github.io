---
sidebar_position: 1
---

# About Limedrop

## What is it?
Limedrop is a web-based item **dropper**; it is a program that will manage joining games and dropping specific items.

## How do I install it?
Limedrop is an API added to D2Bot # and a web-based frontend. The d2bot-with-kolbot [kolbot](https://github.com/blizzhackers/kolbot) has Limedrop built in.

## How does it work?
There are two parts to Limedrop. One part is the API, and one part is a web page that calls the API. The web page can be accessed at www.limedrop.org

When the web page requests an item, Limedrop will launch the configured profile, join the game specified, and drop the item(s) selected.

## Self-hosting
If you want to access the latest version, use www.limedrop.org, if you would like to host the static front-end yourself, you can download it [blizzhackers/limedrop](https://github.com/blizzhackers/limedrop) and copy it to the "Limedrop" folder of your d2bot-with-kolbot download. To access locally use http://localhost:8080.

If you're using Git to clone d2bot-with-kolbot it will ask you if you want to automatically download the sub-repository.

## Hosted (recommended)
You can also use the externally hosted version here: [http://www.limedrop.org](http://www.Limedrop.org)

The benefit of this version is that it is always up-to-date

**Note:** If you want to access Limedrop from an external network you will need to open router ports. The frontend only delivers the static site, it uses your instance of D2Bot to power the API. Note, the Limedrop API has not been security tested so if you choose to open your network externally, you need to assume all risks associated with that.