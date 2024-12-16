# Challenge 12

You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.

- `*`: Snowflake - Value: 1.
- `o`: Christmas Ball - Value: 5.
- `^`: Decorative Tree - Value: 10.
- `#`: Shiny Garland - Value: 50.
- `@`: Polar Star - Value: 100.

Normally, you would sum up all the values of the ornaments and that's it...

But, watch out! **If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted**.

```js
calculatePrice('***') // 1 + 1 + 1
// Expected result: 3

calculatePrice('*o') // 5 - 1
// Expected result: 4

calculatePrice('o*') // 5 + 1
// Expected result: 6

calculatePrice('*o*') // -1 + 5 + 1
// Expected result: 5

calculatePrice('**o*') // 1 - 1 + 5 + 1
// Expected result: 6

calculatePrice('o***') // 5 + 3
// Expected result: 8

calculatePrice('*o@') // -5 - 1 + 100
// Expected result: 94

calculatePrice('*#') // -1 + 50
// Expected result: 49

calculatePrice('@@@') // 100 + 100 + 100
// Expected result: 300

calculatePrice('#@') // -50 + 100
// Expected result: 50

calculatePrice('#@Z') // Z is unknown
// Expected result: undefined
```

## Stars earned

![5 stars](../../.github/12-challenge-stars.png)
