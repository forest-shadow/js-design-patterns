# Constructor Pattern


> **Constructor Pattern** — used to create new objects with their own object scope. 

* in ES5 It creates objects from functions.

When you create objects with Constructor Pattern, the `new` keyword will be used.

`new` keyword does several things (for ES5: when you use it with `function` construct):

- it will create Constructor Function from this function
- when this Constructor Function will be executed, it creates a brand new Object
- link that created Object to an this Object's prototype (`Object.prototype` )
- binds `this` to the new Object scope
- implicitly returns `this`

> **Prototype** — an encapsulation of properties/methods that an Object links to. All these properties and methods of all newly created Objects will be link back to that Prototype. 

* JS Object's inheritance based on Prototype usage

It's much more efficient to have one copy of all Object's methods out there sitting inside the Object's Prototype.