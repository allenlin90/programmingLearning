2021/08/31
1. Happy Birthday
2. FE interview day 1
   1. [Link](../posts/link_tag_and_@import.md) - Difference between using `link` tag in HTML and `@import` in CSS.
3. Review Vue notes
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

2021/08/30
1. [NestJS](../javascript/nestJSTheCompleteDeveloperGuide/README.md)
   1. Define `DTO` (Data Transfer Object) as the schema to describe the requirements of incoming `body` of a HTTP request (especially POST request).
   2. Create `Service` and `Repository` and understand the difference between these 2 models.