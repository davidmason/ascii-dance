ascii-dance
===========

    ¯\_(ツ)_/¯ _/¯(ツ)¯\_ ¯\_(ツ)¯\_ _/¯(ツ)_/¯

Generate strings of any ascii people dancing in Node.js and the browser.

Based on [kirby-dance](https://www.npmjs.org/package/kirby-dance) by
[Nizar Khalife Iglesias](https://www.npmjs.org/~khalifenizar).


Example
-------

```js
var dancer = require('ascii-dance'),
    shruggieDance = dancer([[
      "¯\\_(ツ)_/¯",
      "_/¯(ツ)¯\\_",
      "¯\\_(ツ)¯\\_",
      "_/¯(ツ)_/¯"
    ]]);

console.log(shruggieDance(4)); // "¯\_(ツ)_/¯ _/¯(ツ)¯\_ ¯\_(ツ)¯\_ _/¯(ツ)_/¯"

console.log(shruggieDance(-7)); // "_/¯(ツ)_/¯ ¯\_(ツ)¯\_ _/¯(ツ)¯\_ ¯\_(ツ)_/¯ _/¯(ツ)_/¯ ¯\_(ツ)¯\_ _/¯(ツ)¯\_"
```


API
---

### dancer(moves) ###

Returns a functon that will generate dances, where `moves` is an array of one or more strings.

The returned dance is a function `dance(n)`, which will return a string of `n` dance moves,
where `n` is an integer. If `n` is negative, it reverses the dance (starting from the last move).


License
-------

ISC
