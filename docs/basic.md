# Getting started

**ReX.js** ( standing for Regular eXpressions ) is a helper library for writing Regexps. As it's written in *TypeScript*, it provides great autocompletion & development experience across modern code editors ( like *VS Code* ).

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
