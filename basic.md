# Getting started

**ReX.js** ( standing for Regular eXpressions ) is a helper library for writing Regexps. As it's written in *TypeScript*, it provides great autocompletion & development experience across modern code editors ( like *VS Code* ).

![GitHub](https://img.shields.io/npm/l/@areknawo/rex.svg?style=for-the-badge)
[![Travis (.org)](https://img.shields.io/travis/areknawo/Rex.svg?style=for-the-badge)](https://travis-ci.com/areknawo/Rex)
[![Coveralls github](https://img.shields.io/coveralls/github/areknawo/Rex.svg?style=for-the-badge)](https://coveralls.io/github/areknawo/Rex)
[![Gitter](https://img.shields.io/gitter/room/:user/:repo.svg?style=for-the-badge)](https://gitter.im/ReX-js/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@areknawo/rex.svg?style=for-the-badge)](https://bundlephobia.com/result?p=@areknawo/rex)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=for-the-badge)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fareknawo.github.io%2FRex&via=areknawo&text=ReX.js%20-%20Your%20RegEx%20companion%21&hashtags=regexp%2Cjavascript%2Ctypescript%2Cprogramming%2Cweb%2Cdev)

## Installation
**ReX.js** is available on *NPM*. You can include it in your project either using:
```bash
npm install @areknawo/rex
```
or if you're using *Yarn*:
```bash
 yarn add @areknawo/rex
```
  

## Basic usage
**ReX.js** is structured as namespace of modules:

 - ***Matcher*** - class used to construct & use matching expressions;
 - ***Replacer*** - class used to construct & use replacement expressions;
 - ***Operation*** - class representing basic operation that is applied to expressions constructors;
 - ***Parser*** - class used to parse & execute Regexps, used by ***Matcher***, implements polyfills for named groups & 		partially for look behinds;
 - ***ReXer*** - class used to construct Regexps, ***Matcher*** & ***Replacer*** inherit from it;

What you'll be mainly using are ***Matcher*** & ***Replacer*** classes. The rest should be used for extendability and advanced use cases. To give you a glimpse, here's some code:
```javascript
import { Matcher } from '@areknawo/rex'

const expr = new Matcher() // Never-ever add a semicolon if you want to continue expression.
.find('Reg')
.anyWhitespace()
.capture((expr) => { // Best option for nesting expressions IMHO.
	expr.find('Exp')
})
expr.test('Reg Exp') // true
```
or for ***Replacer***:
```javascript
import { Replacer, Matcher } from '@areknawo/rex'

const expr = new Replacer()
.captured('ending') // Named groups support.
.add('pression') // A little different syntax than for Matcher.

const match = new Matcher()
.find('Regular')
.whitespace() // Function aliases are common in Matcher.
.find('Ex').as('ending') // Nice shortcut for named group ( use capture if you want ).

expr.replace(match, 'Regular Ex') // Regular Expression
```
As you can see one of main advantages of using this library is ability to document every line of code without any hassle. You can discover a lot more of available method using autocompletion inside your editor or in API docs which you should totally take a look at.
 Arek
## References

!> Look behinds are implemented in form of preceding group checks, so they will work for most of normal use cases but not for all. Take a look at ***Polyfiller*** class in code if you want to explore it deeper.

?> The introductory tutorial is available on [dev.to website](https://dev.to/areknawo/the-more-proper-introduction-to-rexjs-e72).
