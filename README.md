# ReX.js
***Your RegEx companion.***

![GitHub](https://img.shields.io/npm/l/@areknawo/rex.svg?style=for-the-badge)
[![Travis (.org)](https://img.shields.io/travis/areknawo/Rex.svg?style=for-the-badge)](https://travis-ci.com/areknawo/Rex)
[![Coveralls github](https://img.shields.io/coveralls/github/areknawo/Rex.svg?style=for-the-badge)](https://coveralls.io/github/areknawo/Rex)
[![Gitter](https://img.shields.io/gitter/room/:user/:repo.svg?style=for-the-badge)](https://gitter.im/ReX-js/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@areknawo/rex.svg?style=for-the-badge)](https://bundlephobia.com/result?p=@areknawo/rex)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)



The JS Library for writting complex RegExps with help of autocompletion!


```javascript
import { Matcher } from '@areknawo/rex'

// Trivia example of usage
const expr = new Matcher()
.find('Reg')
.whitespace()
.capture((expr) => {
  expr.find('Exp')
}).test('Reg Exp'); //true
```
***More information can be found on https://areknawo.github.io/Rex.***
