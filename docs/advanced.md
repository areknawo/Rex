# Advanced usage
**ReX.js** beyond basic Regexp's operations provide vast options for extending its functionality. Keep in mind that use of *TypeScript* is required to access and compile *lib* folder.
## Operations & channels
Each method used in **ReX.js** is in fact doing nothing more than adding new ***Operation*** to ***ReXer***. ***Operation*** can be then stringified using its own *stringify* method to built expression. For ease of use the `add` method of ***ReXer*** automatically parses given *configuration* to new ***Operation***.

For constructing linear Regexps from nested function expressions, concept of *channels* is introduced in **ReX.js**. *Channel* is nothing more than *array of* ***Operations***. *Channels* themselves are contained *as array* in ***ReXer***. By default it contains one empty array with ***index 0*** which is considered as ***main channel***. New *channel* is added every time nesting occurs. These *channels* are then used to be stringified and appended to the main one. See ***ReXer*** class in API to take a look at *channels* related methods. Know that *you shouldn't need to make use of channel API directly* instead leave this for **ReX.js** to handle.

## Snippets
If you want to reuse any kind of ***Operation*** config, you can use *snippets*. These provide you with an option to assign given config to a name for later reuse. See ***ReXer*** API of `createSnippet` and `insertSnippet` methods. Know that *snippets* don't work like Regexp's group references. Instead they just insert the same operation again and again into constructed expression.
## Extensions & methods
*Methods* are one of key features of **ReX.js**. These are ways of reusing & applying custom operations to ***ReXer*** They can be added using `useMethod` function of ***ReXer***. *Method* that can be used / registered looks like this:
```typescript
// While using typescript you can use files directly from lib.
import { Method, ReXer } from '@areknawo/rex/lib/rexer' // Proper interface is exported from lib.

const myMethod: Method<ReXer> = { // Let's say that 'this' context is ReXer.
	name: ['myMethodName', 'myMethodOtherName'], // Name or array of names.
	func(arg: string) { // Func cannot be arrow function as it must be bindable.
		/*
		Take any number of arguments you want.
		Use this to access instance of ReXer that the method is used in.
		It can be even ReXMatcher class, so you can use other registered methods.
		Do something cool!
		*/
		this.add(arg)
		return this // Remember to return this for your method to be chainable!
	}
}
```
*Extensions* are just *arrays of methods* so nothing new here. These just provide a way for using multiple *Methods* at once. They can be added to ***ReXer*** with `useExtension` method. In fact most of **ReX.js** methods ( like `capture`  and `wordChar`) are made this way. If you're using typescript, it might or even should be important to you to have proper autocompletion. Below you can see an example of how you can achieve this.
```typescript
import { Matcher } from "@areknawo/rex/lib/matcher";
import { Method } from "@areknawo/rex/lib/rexer";

interface myExtension { // Define interface for your extension.
  /**
   * Documentation
   * @param arg Argument
   */
  myMethodName(arg: string): Matcher; // Document your method.
  myMethodOtherName: myExtension["myMethodName"]; // Document method alias.
}

declare module "@areknawo/rex/lib/matcher" { // Use TS declaration merging
  interface Matcher extends myExtension {} // Extend or define directly.
}

const myExtension: Method<Matcher>[] = [ // Your extension.
  {
    name: ["myMethodName", "myMethodOtherName"],
    func(arg: string) {
      this.add(arg);

      return this;
    }
  }
];

const expr = new Matcher()
expr.useExtension(myExtension); // Use extension
```
Or if you're authoring many extensions, you can always extend the ***ReXer***, ***Matcher*** or ***Replacer*** class: 
```typescript
import { Matcher } from "@areknawo/rex/lib/matcher";
import { Method } from "@areknawo/rex/lib/rexer";

interface myExtension { // Define interface for your extension.
  /**
   * Documentation
   * @param arg Argument
   */
  myMethodName(arg: string): Matcher; // Document your method.
  myMethodOtherName: myExtension["myMethodName"]; // Document method alias.
}
const myExtension: Method<Matcher>[] = [ // Your extension.
  {
    name: ["myMethodName", "myMethodOtherName"],
    func(arg: string) {
      this.add(arg);

      return this;
    }
  }
];
interface myOwnMatcher extends myExtension {}; // Extend your class interface

class myOwnMatcher extends Matcher {
    constructor() {
        super()
        this.useExtension(myExtension);
    }
}
// Use your class.
```