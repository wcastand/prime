# Prime table

# Use it

now hosting : [https://prime-etkrrjdqev.now.sh/](https://prime-etkrrjdqev.now.sh/)

Install the dependencies :

```
$ npm install
// or
$ yarn
```

Launch the server :

```
$ npm run start
// or
$ yarn start
```

Launch the test :

```
$ npm test
// or
$ yarn test
```

To get watch tests : `$ npm testdev`

You can regenerate a prime table by clicking the small pencil in the top left of the page.

## What you’re pleased with ?

The power of the tool i choose when it comes to get a result quickly (nextjs, jest).
The generation of prime took some research but was easier than i thought it will be or at least faster to implement than expected.

## what you would do with it if you had more time ?

Look for a way to improve the guessing of how much the limit needs to be for the algo. It seems to be quite large and result in a lot more prime than i need based on n.

Probably look at a better interface to present the result. The array is simple and efficient but when you have so many numbers it becomes hard to not get lost, also on a mobile it will probably be not readable in this state. Add some way to only show a range on the array would be a good way to improve readability and presentation on both desktop and mobile.

I would use some loading state also to handle cases like 1000 prime generated with his table (1 000 000 result was a lot for my mac).
