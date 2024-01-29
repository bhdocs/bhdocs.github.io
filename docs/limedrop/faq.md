---
sidebar_position: 4
---

# Frequently Asked Questions

## Will Limedrop steal my information?
No. The web page part of Limedrop only makes calls to the API running on your D2BS. Your account passwords are not stored directly in the web page. Also, it's open source so if you don't trust it you can always take a look at the code yourself!

## Can it run side-by-side with my existing bots?
Yes. If you want to quickly try Limedrop you can copy it to a separate folder and configure it

## Can I use my existing mule logs with Limedrop?
No. You will have to re-scan your existing mules in order to add them to the Limedrop Inventory

## Will Limedrop automatically update my inventory after dropping items?
Yes.

## How to select all items in limedrop?
Just type this in your address bar on the limedrop page:
```javascript
javascript:document.querySelectorAll('#items-list>div').forEach(el => el.click())
```
Works in chrome, but might take a while depending on item count.
Make sure that all items are loaded beforehand (scroll to the end as long  as new items are loaded)
(thanks discord/@ToDoWaldi#8021)
