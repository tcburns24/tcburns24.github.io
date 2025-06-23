---
layout: post
title: Whack-A-Mole
thumbnail-path: "img/whack-a-mole.png"
short-description: A classic arcade game brought to you through the magic of pure vanilla JavaScript.
stack-images: ["img/javascript.png"]
---

{:.center}
[<img src="/img/whack-a-mole.png">](https://github.com/tcburns24/whack-a-mole)

## Explanation

What arcade game is more efficient at stress relief than Whack-A-Mole? Just a few wollops to the face of those pesky moles can melt a day's stress away. The stress-relieving power of the arcade classic was my inspiration in building this static JavaScript app.

## Obstacle

Beware the `setInterval`! The biggest obstacle I encountered while building Whack-A-Mole was a `setInterval` that I allowed to run rogue. The countdown timer uses a `setInterval` to operate; originally, I had failed to clear the interval once the timer reached zero. Everytime a user started a new game, an additional `setInterval` was called, causing the timer to countdown in at 2x the speed, 3x the speed, 4x, etc..

## Solution

Fortunately my mentor, Cyle Dawson noticed my error and showed me how to resolve it. After 1) setting the interval to a variable, then 2) clearing it at the time the timer reached 0, the timer works like a charm.

## Conclusion

Not only was my `setInterval` causing a UI issue, it could've been a major memory leak as well. If I had scaled the app (adding a backend to track users, user scores, etc.) without clearing the interval each time a game ran, I'd have memory leaking out my ears.

### Github

[All the beautiful JavaScript](https://github.com/tcburns24/whack-a-mole)

### Play The Game

[Codesandbox](https://ck89wr.csb.app/)
