# ReX.js
***Your RegEx companion.***

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)
[![Travis (.org)](https://img.shields.io/travis/rust-lang/rust.svg?style=for-the-badge)](https://travis-ci.com/areknawo/Rex)

The JS Library for writting RegExps with help of autocompletion!


```javascript
import { Matcher } from '@areknawo/rex'

const expr = new Matcher()
.find('Reg')
.whitespace()
.capture((expr) => {
  expr.find('Exp')
}).test('Reg Exp'); //true
```
## Help
If you can consider contributing or donating to development of ReX.js.
Any form of help is welcome.

*BTC Address:* **1B8j4ELGwVJNXYSgKeYod1FFa9ES4MW46t**