[D2Bot Table of Contents](https://bhdocs.github.io/docs/category/d2bot)

[Kolbot Table of Contents](https://bhdocs.github.io/docs/category/kolbot)

---

# D2BotMuleLog

---

* [info](#info)
* [how to set up](#how-to-set-up)
* [searching for items](#searching-for-items)
* [optional mule viewer](#optional-mule-viewer)
* [dropper](#dropper)
* [diabase & d2bs](#diabase--d2bs)

---

## Info
It's a D2BS starter script which allow to log the items from inventory, stash and the equipped ones (including merc) to text files, then to show them in the `<Char Viewer>` tab of the manager.

### How to set up
In kolbot/libs/systems/mulelogger/LoggerConfig.js fill out `LogAccounts`
```javascript
LogAccounts: {
  /* Format:
    "account1/password1/realm": ["charname1", "charname2 etc"],
    "account2/password2/realm": ["charnameX", "charnameY etc"],
    "account3/password3/realm": ["all"]

    To log a full account, put "account/password/realm": ["all"]

    realm = useast, uswest, europe or asia

    Enter Individual entries are separated with a comma below
  */
  "exampleAcc/pa33word3/realm": ["all"],
},
```
! the realm should be written with lowercase letters (see line 16), otherwise you'll get an error in OOG.js
```javascript
LogGame: ["", ""], // ["gamename", "password"]
```

At the first run set the next variables (lines 10-17):
```javascript
LogNames: true, // Put account/character name on the picture
```
! set false if you wanna use your item images ...(related to SaveScreenShot: true)
```javascript
LogItemLevel: true, // Add item level to the picture
LogEquipped: false, // include equipped items
LogMerc: false, // include items merc has equipped (if alive)
SaveScreenShot: false, // Save pictures in jpg format (saved in 'Images' folder)
AutoPerm: true, // override InGameTime to perm character
IngameTime: rand(180, 210), // (180, 210) to avoid RD, increase it to (7230, 7290) for mule perming
```

LogEquipped - will be logged all items,  but the potions/tomes or other low level items will be skipped from log - see **skipItem** function from core/Item.js.

In case of logging all the chars (the visible 8), at the end the d2 will be reset to main screen, re-login and after rechecking the first char it will be closed automatically by the manager and the related profile, too. This isn't working in case of setting a single mule char, when you have to stop that profile manually.

The profile doesn't need all fields completed:

![d2botmulelog1](img/kolbot-d2botmulelog1.png)
* Location coordinates only if Visible is checked

there will be automatically created in ...\mules\ the "Realm\Account\" subfolders. Charnames will be ordered alphabetically.

![d2botmulelog2](img/kolbot-d2botmulelog2.png)

the logging info for items includes the shapes and other details and you'll see on mouse over the image of the item (other than the screenshots from Images folder):

![d2botmulelog3](img/kolbot-d2botmulelog3.png)

and with R-click you have these option for saved items:

![d2botmulelog4](img/kolbot-d2botmulelog4.png)

You'll have that info in the "Char Viewer" tab of the manager console as long as you keep those log files in ...\mules\ folder. Those will be automatically loaded at every D2Bot.exe start, but there is an option in Settings > Refresh Char View, to reload the logging files.
Every item is saved on different line, so you can edit those logging files easily with any txt/code editor of choice. See [IDE-Setup](IDES#code-editors-ides) for code editors.

It will be saved in ...\logs\MuleLog.json the current account and the current charname. This have to be edited or removed in case of crashes when some chars were omitted from logging. At the end of full account logging, that file is deleted automatically.

### Searching for Items
In the left box of `<Char Viewer>` tab, select the branch (Realm or Account) where you are trying to find the item. Use the right-bottom search box. It accepts regular expressions, so you can search for just about anything as long as the query is correctly written.

![d2botmulelog5](img/kolbot-d2botmulelog5.png)

The account/charname will be logged automatically (and help you in searching items) and you'll see on mouse over the item list, the "account / charname" in top-left of that image if in the manager Settings is activated the option 

![d2botmulelog6](img/kolbot-d2botmulelog6.png)

If you wanna save the image (check R-click options) of an item without having this info, 

![deactivate the Item Header](img/kolbot-d2botmulelog7.png).

You will find the images near D2Bot.exe in the subfolder \images , the same location for screenshots made during the logging.

### Optional Mule Viewer

Check [@rivx mule view project](http://www.rivsoft.net/projects/other/muleview/) and download [MuleView-v0.3.zip](http://www.rivsoft.net/download/other/MuleView-v0.3.zip) which allows you to view the logged files saved with d2bs. 
[original shared topic](https://web.archive.org/web/20150613144010/http://www.blizzhackers.cc:80/viewtopic.php?f=172&t=500047)

### Dropper
It's a free public dropper - limedrop, included in the default branch (master = trunk) of repository
- browser link [https://github.com/blizzhackers/kolbot/tree/master]
- download link for TortoiseSVN [https://github.com/blizzhackers/kolbot/trunk/]
- check the [discord limedrop channel](https://discordapp.com/channels/430522386253611018/482930024681439242):

* [About limedrop](https://github.com/blizzhackers/documentation/tree/master/limedrop#about-limedrop)
* [Setup Limedrop](https://github.com/blizzhackers/documentation/tree/master/limedrop#setup-limedrop)
* [Using Limedrop](https://github.com/blizzhackers/documentation/tree/master/limedrop#using-limedrop)
* [FAQ](https://github.com/blizzhackers/documentation/tree/master/limedrop#frequently-asked-questions)


### Diabase & D2bs
[@Ned](https://github.com/Nedkali/)added some changes to Diabase to work with D2BS

* download using SVN Checkout... -> (https://github.com/Nedkali/DiaBaseV1/trunk)
* create a subfolder ...\d2bs\kolbot\MuleInventory\
* you have the option to not use the Diabase function which overwrite the files, using Utilities > Verify logging files, and it's enough to replace the default libs\MuleLogger.js with [Mulelogger on gist](https://gist.github.com/mf022/a0ee6d71d071dc45635650cef4bc8afd) - which will create the both log files for the default D2BS Char Viewer (in mules\realm\account) and Diabase(in MuleInventory\).