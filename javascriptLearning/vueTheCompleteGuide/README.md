Start learning on 2021/04/19
Finished on 

Course Link [https://www.udemy.com/course/vuejs-2-the-complete-guide/](https://www.udemy.com/course/vuejs-2-the-complete-guide/)
---
1. [Basics and Core Concepts - DOM Interaction with Vue](#Basics-and-Core-Concepts---DOM-Interaction-with-Vue)
    1. [Creating and Connecting Vue App Instance](#Creating-and-Connecting-Vue-App-Instance)
    1. [Interpolation and Data Binding](#Interpolation-and-Data-Binding)
    1. [Binding Attributes with the "v-bind" Directive](#Binding-Attributes-with-the-"v-bind"-Directive)
    1. [Understanding "methods" in Vue Apps](Understanding-"methods"-in-Vue-Apps)
    1. [Working with Data inside of a Vue App](#Working-with-Data-inside-of-a-Vue-App)
    1. [Outputting Raw HTML Content with v-html](#Outputting-Raw-HTML-Content-with-v-html)

---

# Basics and Core Concepts - DOM Interaction with Vue
## Creating and Connecting Vue App Instance
1. Starter HTML
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue Basics</title>
        <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
        <script src="https://unpkg.com/vue@next" defer></script>
        <script src="app.js" defer></script>
    </head>
    <body>
        <header>
        <h1>Vue Course Goals</h1>
        </header>
        <section id="user-goal">
        <h2>My Course Goal</h2>
        <p></p>
        </section>
    </body>
    </html>
    ```
1. To use Vue, we need to specify in HTML that which element will be handled by Vue. 
1. To initiate Vue, we should create a `Vue App` in the JS code, and it requires an JavaScript object which as `data` method as a must property.
1. The `data` method should always return another JavaScript object which may have arbitrarily named keys. 
1. We then can use `app.mount()` selector to manipulate the HTML element on the page.
    ```js
    // Vue framework should be imported
    const app = Vue.createApp({
        data() { // must return an object
            return { // key/value pair can be named arbitrarily
                courseGoal: 'Finish the course and learn Vue!'
            };
        }
    });

    app.mount('#user-goal');
    ```

## Interpolation and Data Binding
1. We can put the placeholder in HTML which should match to the property that we want to return its value in `data` method.
1. Note that we can have multiple placeholder in the component, and all of them will show the same value. 
    1. HTML 
        ```html
        <section id="user-goal">
            <h2>My Course Goal</h2>
            <p>{{ courseGoal }}</p> <!-- placeholder for Vue selector to identify-->
            <p>{{ goalList }}</p>
        </section>
        ```
    1. JavaScript
        ```js
        const app = Vue.createApp({
            data() { // must return an object
                return { // key/value pair can be named arbitrarily
                    courseGoal: 'Finish the course and learn Vue!',
                    goalList: ['task 1', 'task 2']
                };
            }
        });

        app.mount('#user-goal');
        ```
1. If we use the placeholder somewhere else that isn't selected by Vue selector, it will be regular string in HTML.
1. The Vue component can not only show text but also other primitive values or JavaScript array or object, which will be stringified as JSON to be shown as string.
    <img src="images/14-placeholder_vue_component.png">

## Binding Attributes with the "v-bind" Directive
1. Though we can use double curly braces as placeholder for Vue component to import values, it doesn't work with attributes on HTML tags such as `href` of an anchor tag.
1. We then can use `v-bind` on the attribute to indicate that the HTML attribute should work with Vue. Note that the placeholder for the attribute doesn't require double curly braces.
    ```html
    <section id="user-goal">
        <h2>My Course Goal</h2>
        <p>{{ courseGoal }}</p>
        <p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
    </section>
    ```

## Understanding "methods" in Vue Apps
1. To execute function as the event handler on a HTML element, we need to firstly set up the `methods` in the Vue app. 
1. Besides `data`, we can pass another property `methods` which holds the callback functions to handle events on HTML elements.
1. Note that the methods we want to call by Vue app should be declared in `methods` property only. Both `data` and `methods` are reserved properties for a Vue app.
    ```js
    const app = Vue.createApp({
        data() { 
            return { 
                courseGoal: 'Finish the course and learn Vue!',
                vueLink: 'https://vuejs.org/'
            };
        },
        methods: {
            outputGoal() {
                const randomNumber = Math.random();
                if (randomNumber < 0.5) {
                    return 'Learn Vue!';
                } else {
                    return 'Master Vue!';
                }
            }
        }
    });
    ```
1. The placeholder with double curly braces in HTML can take not only variables from Vue but also JavaScript expressions. Note that it doesn't take complicated structure such as an IF/ELSE statement, but it works with ternary operator.
    ```html
    <section id="user-goal">
        <h2>My Course Goal</h2>
        <p>{{ outputGoal() }}</p>
        <p>{{ 1 + 1 }}</p>
        <p>{{ (1 + 1) > 1 ? true : false }}</p>
        <p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
    </section>
    ```

## Working with Data inside of a Vue App
1. Vue provides a shorthand that we can access the properties and methods on the Vue app object directly by `this` (which is not intuitive for regular Javascript objects!). 
1. The feature just turn all the properties which `data` method can return and methods in `methods` globally accessible with `this`.
    ```js
    const app = Vue.createApp({
        data() { // must return an object
            return { // key/value pair can be named arbitrarily
                courseGoalA: 'Finish the course and learn Vue!',
                courseGoalB: 'Master Vue and build amazing apps!',
                vueLink: 'https://vuejs.org/'
            };
        },
        methods: {
            outputGoal() {
                const randomNumber = Math.random();
                if (randomNumber < 0.5) {
                    return this.courseGoalA;
                } else {
                    return this.courseGoalB;
                }
            }
        }
    });

    app.mount('#user-goal');
    ```

## Outputting Raw HTML Content with v-html
1. Regular interpolation (double curly braces) can only handle the value as text (similar to `innerText` property on a HTML DOM).
    ```js
    const app = Vue.createApp({
        data() {
            return {
                courseGoalA: 'Finish the course and learn Vue!',
                courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
                vueLink: 'https://vuejs.org/'
            };
        },
        methods: {
            outputGoal() {
                const randomNumber = Math.random();
                if (randomNumber < 0.5) {
                    return this.courseGoalA;
                } else {
                    return this.courseGoalB;
                }
            }
        }
    });
    ```
1. For the case, we can use `v-html` as an attribute on the HTML element that we want to inject raw HTML tags as using `innerHTML`. The syntax is similar to `v-bind` which works with regular HTML attributes.
    ```html
    <section id="user-goal">
        <h2>My Course Goal</h2>
        <p v-html="outputGoal"></p>
        <p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
    </section>
    ```
1. However, it's not recommended to have this method as default because it may be vulnerable to XXS attacks.