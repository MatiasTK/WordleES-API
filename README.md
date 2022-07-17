WordleES-API
==============

Overview
----------

Api used for my WordleES project, only spanish words!
Every day it returns a new word

Demo
----------

[Heroku App](https://matiastk-wordle-api.herokuapp.com/)

Usage - Routes
----------

* `/api/wordle/` Returns the daily word in json format, `{ dailyWord: "Some word" }`
* `/api/wordle/checkword/someword` Check if someword equals dailyword, returns json `{ status: "correct" }` or `{ status: "incorrect" }`
* `/api/wordle/updateword` Replace the daily word with a random one, returns json `{ status: 'New word selected' }`
* `/api/wordle/setword/someword` Set the daily word to someword, returns json `{ status: "Daily word set to someword"}`
* `/api/wordle/random` Return non daily random word in json `{ word: someword }`

TO-DO
----------

- [ ] Avoid repeating words.
- [x] Transform project into typescript.
- [ ] Store word to use less DB data.
- [ ] Crypt word?