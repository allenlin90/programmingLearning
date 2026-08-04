**Encapsulation**
1. The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. Therefore, each piece of program can be treated separatedly and knowledge and code can be kept locally in each piece. They don't affect to each other without permission and connection. When we edit or update something, we can just focus on the single part and the place around it. 
1. Different pieces of programs interact with each other through interfaces, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation. The program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called **_public_**. The others, which outside code should not be touching, are called **_private_**.
1. Though many languages have a way to distinguish public and private properties, JavaScript hasn't had way to prevent outside code from accessing the private properties. However, it's common that JS programmers put an underscore " _ " to indicate that the property is private. Keeping the private properties is called **_encapsulation_**

**Methods**
1. Methods are properties that hold function values. A method needs to work on the object it was called. A binding "**this**" in its body automatically points at the object that it was called on. 
1. "**this**" can be considered as an extra parameter that is passed in a different way. We can use `.call()` method for function values to pass in an object or other values as the first argument to the funciton. 
1. Each function has its own `this` binding, which value depends on the way it is called, which means the keyword `this` will be limited to a function scope. If there's an inner or callback function, as the scope changes, the referral object will be changed. 
1. However, "**Arrow functions**" are different as that they don't have their own `this` binding, as it is an expression. (Note that expression returns value(s), while statement is an action). Besides, we can't define a method in arrow function, as it can't be invoked as the `this` in there will be bound to the wrong object. Arrow functions shine best with anything that requires `this` to be bound to the context, and not the function itself.
    ```js
    function normalize() {
    console.log(this.coords.map(n => n / this.length));
    }
    normalize.call({coords: [0, 2, 3], length: 5});
    // → [0, 0.4, 0.6]
    //If the argument to amp using function keyword, the code wouldn't work.
    ```

**Prototypes**
1. `Objects` in JavaScript have a property `prototype` to set up their properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.
1. We can use Object.getPrototypeOf(**_`obj`_**) to return the prototype of an object. The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits `Object.prototype`. It provides a few methods that show up in all objects. 
    ```js
    console.log(Object.getPrototypeOf({}) ==
                Object.prototype);
    // → true
    console.log(Object.getPrototypeOf(Object.prototype));
    // → null
    ```
1. Many objects don’t directly have `Object.prototype` as their prototype but instead have another object that provides a different set of default properties. Functions derive from `Function.prototype`, and arrays derive from `Array.prototype`. The prototpye object will itself have a prototype as `Object.prototype` which is kept in `_proto_` property. `Array.prototype._proto_ == Object.prototype //true`
    ```js
    console.log(Object.getPrototypeOf(Math.max) ==
                Function.prototype);
    // → true
    console.log(Object.getPrototypeOf([]) ==
                Array.prototype);
    // → true
    ```
1. We can use `Object.create` to create an object with a specific prototype. The passed property values are stored in the hidden property `_proto_` which has an inner `_proto_` which is an Object.prototype. 
1. We can assign a variable with an object. A property like speak(line) in an object expression is a shorthand way of defining a method. It creates a property called speak and gives it a function as its value. 
1. We use `Object.create` to create an object inherit the prototype properties which is hidden in `__proto__`. Note that the object created with the function will still be empty as it is only assigned with the hidden properties from the prototype. Besides, as the new created object is still an **object** type of value, it also inherits the properties of Object.prototype. 
    ```js
    let protoRabbit = {
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
    };
    let killerRabbit = Object.create(protoRabbit); 
    //killerRabbit is still an empty object. 
    killerRabbit.type = "killer";
    killerRabbit.speak("SKREEEE!");
    // → The killer rabbit says 'SKREEEE!'

    killerRabbit.__proto__ == protoRabbit 
    //true 
    killerRabbit.__proto__.__proto__ == Object.prototype
    //true 
    ```

**Classes** 
1. JavaScript prototype system can be understood as the object-oriented concept **_class_** (which feature is available in Python that we can also define our own classes). A **_class_** defines the shape of a type of object. An objecte created under the **_class_** is called an **__instance__** of the class. 
1. Classes (prototypes) are useful for defining properties for instance as all of them share the same value (such as methods). Properties that are different between each instance should be kept in the object instances themselves directly. 
1. Keyword `new` can be put in front of a function call. The function will be treated as a **_constructor function_**. 
    1. It means that an object with the right prototype is automatically created, 
    1. bound to `this` in the function, and 
    1. returned at the end of the function. 
1. Constructor funcitons (actually all functions) have a property "**prototype**" whose value is an object with property "constructor". This "constructor" property has a value which is the constructor function itself. 
1. By convention, the names of constructors are capitalized so they can be easily distinguished from other functions. Note that constructors are functions, and all function values have a property "prototype". An object created with keyword `new` with a constructor with inherit the prototype property from the constructor. If there's `this` keyword in the constructor function, it will point to the newly created object directly. 
    ```js
    //A constructor function 
    function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
    }

    function Rabbit(type) {
    this.type = type;
    }
    Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    };

    let weirdRabbit = new Rabbit("weird");

    console.log(Object.getPrototypeOf(Rabbit) ==
                Function.prototype);
    // → true
    console.log(Object.getPrototypeOf(weirdRabbit) ==
                Rabbit.prototype);
    // → true

    ```

**Class notation**
1. Before ES6, classes in JavaScript can only be created by constructor functions with their property "**prototype**". A new keyword `class` is introduced in ES6 in year 2015. 
1. With the `class` declaration, we can define a constructor (which is a property of `prototype` property in a function value and we can use `this` to create properties of the instance in the class) and a set of methods in the same object (Note that a class is still an object). Besides, the number of methods in the set can be as many as we want or just 0. 
1. Class declarations currently allow only methods (properties that hold functions) to be added to the prototype, as because though we can use `this` we have to use `.bind()` or referrals to the correct object. Otherwise, `this` may refer to the parent object which is usually the **_global_** object according to the environment. 
1. Similar to `function`, `class` can be used both in statements and expressions. When it is used in an expression, it doesn't define a binding (variable) but just produce the constructor as a value. Besides, we can omit the `class` name similar to `function` as for one-time use. 
    ```js
    let object = new class { getWord() { return "hello"; } };
    console.log(object.getWord());
    // → hello
    ```

**Overriding derived properties** 

![Rabbit](https://eloquentjavascript.net/img/rabbits.svg) 
1. When adding a property to an object, whether the property is presented in the prototype or not, the property is added to the object itself. If there's a property inherited from the prototype, the property will be overridden and be kept in the hidden property `__proto__`. 
1. Thus, we can give new property to instance that has explicit properties, while other instance can have properties inherited from the prototype. 

**Maps** 
1. When we call an object, the inherited properties from prototypes in `__propt__` can also be invoked. Therefore, if we create an object with `Object.create(null)`, by passing a `null`, it won't inherit any properties of a regular object. This type of plain object is call a **_map__** class object. A map (noun) is a data structure that associates values (keys) with other values. 
1. JavaScript has a class called `Map` that is written for the same purpose as for `map` type value in other programming languages. A `Map` stores a mapping and allows any type of keys. 
    1. `.set()` method takes 2 arguments, which the first is the key, and the 2nd is the value to the key. 
    1. `.get()` method retrieve the value of the "key" (property) by the given argument. 
    1. `.has()` method checks if the object has a certain "key" (property) as the given argument and returns boolean `true` or `false`. 
1. We can use `Object.keys(obj)` which takes an object as argument and return an **array** which has all the keys (properties) of the object. 
1. Besides keyword `in` (which is used in an expression), `.hasOwnProperty()` is a method that takes a string as an argument to check if the string value matches any name of object's property and returns a boolean value. 
    ```js 
    console.log("x" in {x: 1}); //true 
    console.log({x: 1}.hasOwnProperty("x")); //true 
    ```

**Polymorphism** 
The main idea is that a sub class can inherit properties from its parent but "**mutate**" some of them. Tough it may look very different from its parent, it is still the same type as its parent class. The idea is like a car is a vehicle, but not all vehicle are cars (airplne and ship are also vehicles). Besides, we can change some of the derived methods to return useful information of the `Object`.

**Symbols** 
1. If we use a String as the name of property, we may override the inherited one. However, we can not only use Strings as name for property but also `Symbols`. 
1. `Symbols` are values created with the Symbol function. Unlike strings, newly created symbols are unique which means that we cannot create the same symbol twice. We can pass a string value to a `Symbol`, so when the Symbbol turned into a String, the String value also shows. Though it would be easier to recognize, it has no meaning beyond as multiple symbols can have the same name. 
1. We use square brackets notation after an object to call a property which is named with symbol value. 
    ```js
    const toStringSymbol = Symbol("toString");
    Array.prototype[toStringSymbol] = function() {
        return `${this.length} cm of blue yarn`;
    };

    console.log([1, 2].toString());
    // → 1,2
    console.log([1, 2][toStringSymbol]());
    // → 2 cm of blue yarn

    let stringObject = {
        [toStringSymbol]() { return "a jute rope"; }
    };
    console.log(stringObject[toStringSymbol]());
    // → a jute rope
    ```

**The iterator interface** 
1. Objects are expected to be **_iterable_** when given to FOR/OF loop. It has a method named the `Symbol.iterator` (a symbol value is stored as a property of the `Symbol` function). When it is called, the method should return an object that provides a second interface, **_iterator_**, which has a `next` method that returns the next result. That result should be an object with a `value` property, which holds the next value, and a `done` property, which is true when there is no more result. Otherwise, `done` should be `false`. 
1. Note that `next`, `value`, and `done` property names are plain strings, not symbols. Only `Symbol.iterator` is an actual symbol. 
(Don't understand the topic yet...Skipped...)

**Getters, setters, and statics**
1. We can use `get` keyword to run a method in an `Object` without calling the method itself by parenthesis. Besides, the method can not be called directly as well. This can be useful to return a dynamic result rather than a static value. For example, we can set up `Object.keys(this)` in this "getter" method to get a dynamic array of properties of the `Object`. Therefore, in the following example, if someone checks the object's "size" property, it calls the method and return a random number. 
    ```js
    let varyingSize = {
        get size() {
        return Math.floor(Math.random() * 100);
        }, 
        get keys() {
        return Object.keys(this); 
        },
        a: 1,
    };

    console.log(varyingSize.size); // a random number returned by the method 
    console.log(varyingSize.keys); // ['size', 'keys', 'a'] 
    ```
1. Besides `get`, we can use `set` to set the value returned from the method to another properyt of the `Object`. In the following example, we can create a "Temperature" `Object` by giving degrees in "**celcius**" or "**fahrenheit**". If we set the temperature by giving a temperature in fahrenheit, the object will convert it to degree in celcius by the given formula. With keyword `static`, we can create the `Object` by giving a temperature in fahrenheit. 
    ```js 
    class Temperature {
        constructor(celsius) {
        this.celsius = celsius;
        }
        get fahrenheit() {
        return this.celsius * 1.8 + 32;
        }
        set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
        }
    
        static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
        }
    }
    
    let temp = new Temperature(22);
    console.log(temp.fahrenheit);
    // → 71.6
    temp.fahrenheit = 86;
    console.log(temp.celsius);
    // → 30
    ```

**Inheritance**
1. We can build a new class which inherits some of the properties from an existing class by using `class newClass extends oldClass {}`. 
(Don't understand the topic yet...Skipped...)

**The `instanceof` Operator**
1. We can use keyword `instanceof` to check if an `Object` is an instance of a "**class**" by giving the `Object` and the `Constructor`. 