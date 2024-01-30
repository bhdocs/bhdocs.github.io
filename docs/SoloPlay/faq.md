---
sidebar_position: 5
---

# Frequently Asked Questions
## **Q: Why isn't the bot making the build I selected?**

**A:** The bot follows a set build progression. See next question.

## **Q: When will the bot change to the final build I selected?**

**A:** In classic, the bot will switch to the final build after it defeats diablo and meets a level requirement.
In expansion, it transitions to the final build when final gear requirements are met (Navigate to [libs\SoloPlay\BuildFiles](https://github.com/blizzhackers/kolbot-SoloPlay/tree/restructuring/libs/SoloPlay/BuildFiles)) and look for the file with the name of the final build you choose to see what items are needed for each build and what level is required for classic.

## **Q: The bot has beaten diablo (classic) / baal, so why isn't moving on to the next difficulty?**

**A:** The bot will only progress once it has reached a minimum character level (navigate to [libs\SoloPlay\BuildFiles\classname\classname.js](https://github.com/blizzhackers/kolbot-SoloPlay/tree/restructuring/libs/SoloPlay/BuildFiles) and see `CharInfo.levelCap` for level requirments) and will not start the next difficulty with negative resistances. If the bot is more than 5 levels higher than the minimum character level and has not reached the required resistances, it will automatically move to the next difficulty.

## **Q: How can I run more than one of the same class?**

**A:** Simply append a number after the class name. For example, if you want to run 5 sorceresses just name the profiles: `SCL-SORC-1`, `SCL-SORC-2`, `SCL-SORC-3`, `SCL-SORC-4`, `SCL-SORC-5`. Example Profile Names are listed at the bottom of the install guide.

## **Q: HELP!!! There is an error when starting the bot?**

**A:** There was a bad installation OR the profile settings are wrong. First verify that you using the kolbot version linked the install guide below. Next, confirm you have installed all the files into their proper locations (including overwriting the existing `default.dbj`). Finally, verify the profile name and infotag follow the format of the install guide's instructions.

## **Q: HELP!!! The bot auto created my account and I can't find the password!**

**A:** The info for each character created is saved under logs/Kolbot-SoloPlay/realm/ , look for the name of the character whos info you're trying to find and open up the .json file. 

## **Q: HELP!!! The bot isn't casting any skills!**

**A:** The bot uses packet casting for stability, which doesn't show the casting animations. It is actually casting the skills, if you would like to see the casting animations you will need to navigate to [libs\SoloPlay\Tools\Developer.js](https://github.com/blizzhackers/kolbot-SoloPlay/blob/restructuring/libs/SoloPlay/Tools/Developer.js) and change forcePacketCasting.enabled to false.

## **Q: What is a Bumper?**

**A:** A Bumper is a level 40 character that has not done baal quest in normal and is used to "bump" low level characters to hell difficulty where they can power level following chaos runs. 

## **Q: Does this work for Diablo 2 Resurected?**

**A:** No, Kolbot does not work with d2r and SoloPlay runs using Kolbot. SoloPlay only works on diablo 2. 

## Really Dumb Frequently Asked Questions
### **Q: Can I make my solo bots work together?**

**A:** NO. It is SOLO not team, not group, but SoloPlay