---
layout: post
title: Hangman
thumbnail-path: "img/hang_man.png"
short-description: A classic!
---

{:.center}
[<img src="/img/hang_man.png">](https://github.com/tcburns24/Hang_Man)

## Explanation

I have to admit, this one is special to me. Hangman represents the first side project born from my own motivation. Bloc has some fantastic and challenging projects in its curriculum, but there's something awfully rewarding about concocting your own idea, and seeing it come to life.

This idea was born over a lunch conversation with a software engineer at LinkedIn. He mentioned that he had built his own hangman app just for fun. All of a sudden, I had an itch I needed to scratch. That very same day, I found myself hacking away at the HTML for the app. I know, I know -- it's not the most complex app in the world, but like Hannibal from the A-Team says, "I love it when an app comes together!"

## What I'd Do Differently

The most glaring weak spot about Hangman is that it can't be played over the web. Having to play a computer game with someone in the same room is sooo 2005! I'd like build a 2nd version of Hangman using Google Firebase so that users can play it remotely.

Secondly, I'd like to create functionality so that a user can input a word discreetly; where black dots fill the text box rather than the word's letters. This way, a user wouldn't need to look away while his opponent enters a word.

Lastly, the ability to determine how many wrong guesses a user is allowed would be a nifty addition. Currently, the man is fully "hanged" after 6 incorrect guesses. Maybe adding functionality such that users could select 6, 8, or 10 incorrect guesses. Or, for the mathematically inclined, maybe the number of incorrect guesses is determined by the length of the word in play. For example, incorrect_guesses = word.length / x; this way a guesser would have more leeway when guessing the letters in "sesquipedalian" versus the letters in "cat".
