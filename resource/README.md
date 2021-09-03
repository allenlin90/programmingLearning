# This is the journal of learning path
Starting date: [2021-08-30](#2021-08-30)

---

## 2021-09-03
1. FE interview day 3
   1. CSS methods to hide HTML elements on page. [Note](../resource/posts/html_and_css/css_methods_hiding_elements.md)
   2. Create a function which takes 2 arguments (string and character) to remove the last character in the string from the given argument. 
2. Add `auth` module in NuxtJS when developing [MakeSend Driver Web](https://driver-webapp.makesend.asia/) with Vue framework. [Notes](../resource/posts/nuxt/auth_module.md)

## 2021-09-02
1. Explain and realize "Holy Grail" and "Double Wing" layout with HTML and CSS. [Notes](../resource/posts/html_and_css/holy_grail_double_wing_layout.md)

## 2021-09-01
1. Declare a recursive function which creates an array of 5 unique random integers in a given range (inclusive). [Solution](../sandbox/javascriptPractice/recursiveFiveRandomNumberInArray.js)
2. [Review Vue notes](../javascript/vueTheCompleteGuide/README.md)
   1. Section 1 
      1. `computed` property is called by Vue, so we don't call the function directly. 
      2. The value returned by functions in `computed` only changes when the related state is updated.
      3. `watch` works and keeps monitoring the output of a `state` in the component.
      4. Naming of a "watcher" to the state should be identical to the state property.
      5. Summary of `methods`, `computed`, and `watch`
         1. `methods`
            1. Use with event binding OR data binding.
            2. Data binding: Method is executed for every "re-render" cycle of the component.
            3. Use for events or data that really needs to be re-evaluated all the time.
         2. `computed`
            1. Use with data binding.
            2. Computed properties are only re-evaluated if one of their "used values" changed.
            3. Use for data that depends on other data.
         3. `watch`
            1. Not used directly in template.
            2. Allows you to run any code in reaction to some changed data (e.g. send Http request etc.)
            3. Use for any non-data update you want to make.
      6. `v-bind` can be presented as `:`, while `v-on` can use `@` as their shorthand.
      7. Inline styling is similar to React that we can pass an object with CSS properties in camelCase.
      8. `class` attribute in the HTML element can be dynamic when using `v-bind` or its shorthand `:`. 
         1. We pass an object with property name as the class name and give a boolean value to indicate whether to apply the class.
         2. Besides object, it takes array of strings which by default will apply the given items, while we can also have object in the array to keep the class applying dynamically.
   2. Section 2
      1. `v-if`, `v-else-if`, `v-else` is rendering logic and should be place in adjacent DOMs.
      2. The main difference between `v-show` and `v-if` is that `v-show` give `display: none` to the element, while `v-if` will either add or remove the DOM directly in HTML document. In some cases that the element will be toggle very often, we can use `v-show` to improve performance.
      3. To render items in an array, we can use `v-for` with `in` keyword to check items in list. Though `of` keyword also works for array, it's recommended to use `in` as it also works on Javascript objects.
      4. In addition to `v-for`, we can pass a 2nd argument `index` as the position of the item in the array.
         ```vue
         <template>
            <ul v-for="(item, index) in array">
               <li>{{ item }}</li>
            </ul>
            <ul v-for="(value, key, index) in object">
               <li>{{ key }}: {{ value }}</li>
            </ul>
            <ul>
               <li v-for="num in 10">{{ num }}</li>
            </ul>
         </template>
         ```
      5. Javascript array method `.splice` can be used to remove items in an array and create interactive event handling feature.
      6. Similar to rendering a list in React, it's suggested to have a `key` attribute as an identifier to keep all items in the list "unique". Note that `key` attribute should be bond with `v-bind` or `:`.

## 2021-08-31
1. Happy Birthday
2. FE interview day 1
   1. [Link](../posts/html_and_css/link_tag_and_@import.md) - Difference between using `link` tag in HTML and `@import` in CSS.
3. [Review Vue notes Section 1](../javascript/vueTheCompleteGuide/README.md)
   1. `v-once` can be used to works with the view only when the page is firstly rendered.
   2. `v-html` can inject raw HTML elements while it's not recommeded to prevent XSS attack.
   3. `v-bind` can work with a HTML attribute dynamically, such as `value`,  and `v-on` to bind with event handler.
   4. `v-model` is a shorthand to use both `v-on` and `v-bind`.
   5. An event hanlding function as a reserved `$event` arugment as regular JS for event handler.
4. Introduction to Algorithm Chapter 1
   1. An algorithm is any well-defined computational procedure that takes some values, or set of values, as **input** and produce some values, or set of values, as **output**.
   2. An algorithm is a tool for solving a well-specified computational problem.
   3. Insertion sorting has a complexity as `constant * n^2`, while merge sorting has a complexity as `constant * nlgn`. 
   4. Insertion sorting use much less time than merge sorting with limited data.
   5. However, with larger dataset, the different betweeen `n^2` and `nlgn` can be significant. Insertion sorting can spend days with advanced computers by executing machine code, while merge sorting can spend no more than hours to solve the same sorting with less powerful computers by executing high-level programming languages.

## 2021-08-30
1. [NestJS](../javascript/nestJSTheCompleteDeveloperGuide/README.md)
   1. Define `DTO` (Data Transfer Object) as the schema to describe the requirements of incoming `body` of a HTTP request (especially POST request).
   2. Create `Service` and `Repository` and understand the difference between these 2 models.