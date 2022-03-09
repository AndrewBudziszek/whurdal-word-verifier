# Whurdal Word Verifier
(Wordle Word Verifier)

This package was created as a utility to verify valid Wordle words for the better Wordle, [Whurdal](https://whurdal.com). 

## Installtion
Install by running `npm i whurdal-word-verifier`

## Usage
### `verify(word)`
This function verifies words that are valid in the game of [Whurdal](https://whurdal.com). Any real word that is 5 characters long will return true. Anything else will return false.

``` typescript
import { verify } from 'whurdal-word-verifier'

verify('apple'); // true - a real word that is 5 characters long
verify('abcde'); // false - not a real word
verify('thanks'); // false - a real word that is too long
verify('part'); //false - a real word that is too short
```