# This is the journal of learning path
Starting date: [2021-08-30](#2021-08-30)

---

## 2021-09-20
1. Checked [skeleton loading effect](https://wonderful-goldwasser-8b2175.netlify.app/frontend_uis/skeletonloading/). 
   1. This provides a smoother transition for users with slow internet speed that loads on the content gradually.
   2. In developer console, we can check "network" tab and change the environment to simulate slow 3G internet speed to load up the page.
2. Checked [custom scrollbar](https://wonderful-goldwasser-8b2175.netlify.app/frontend_uis/customscrollbar/)
   1. Custom color and effect on scrollbar of different browsers.

## 2021-09-13 ~ 2021-09-19
1. Taking a break and focus on tasks on hands
2. MAKESEND Express
   1. Finish task auto assignment alogrithm verion 1.0
   2. Finish merchant report functions
      1. Search by "date" and "sender name"
      2. Rows per page and pagination (connect to server-side API)
      3. Click to check order details
      4. Export table as Excel
   3. Create dropoff service UI
3. Soi Bear
   1. Mass order booking (Excel upload)

## 2021-09-06 ~ 2021-09-12
1. Proceed challenge [https://github.com/jb-engine/challenges](https://github.com/jb-engine/challenges)
2. [Result](https://github.com/allenlin90/jb-engine)
3. [DEMO](https://jb-engine.netlify.app/news)

## 2021-09-05
1. Review on Vue framework
2. If a component has multiple layers and hierarchy of child components, we can use `provide` and `inject` to avoid passing through all the components in between but allow the components to communicate directly. 
3. Note that this is an one-way communication, and the component that "provides" the data must be the parent or ancestor on the top in the hierarchy.
4. To keep the provided data dynamic or referring to properties of the component or instance, we can turn it as a function which returns an object.
5. We can provide not only data but methods from the parent component. 
   ```js
   // parent component
   export default {
      data() { 
         return { 
            data: 'some data',
            topics: [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }],
            activeTopic: null,
         }
      },
      // provide as an object for static data
      provide: {
         data: 'some data',
      }, 
      // provide as a function returning an object to keep dynamic data
      provide() {
         return {
            data: this.data,
            selectTopic: activateTopic
         };
      },
      methods: {
         activateTopic(id) {
            this.activeTopic = this.topics.find(topic => topic.id === id);
         }
      }
   }

   // child component
   export default {
      inject: ['data', 'activateTopic'],
   }
   ```


## 2021-09-04
1. FE interview day 4
   1. How does HTML5 document working offline? [Note](./posts/html_and_css/service_worker_appcache.md)
2. Review on Vue framework
3. `props` can be used to communicate from parent to its child component. 
   1. It's an one-way communication only from parent to child. 
   2. We can configure the prop such as if it's required, validate if the prop value is valid to use, and a specific data type.
   ```js
   export default {
      props: {
         value: {
            type: Number,
            default: 0,
            required: true, 
            validator (value) {
               return value >= 0;
            }
         }
      }
   }
   ```
4. Besides `props`, we can use `emit` to send a custom event to allow communication from child to parent component. Note that this is alos an one-way communication from child to parent.
   ```vue
   <template>
    <button @click="$emit('send-value', 'value')">Click</button>
   </template>
   ```
   ```js
   // child component
   export default {
     emits: ['update-state', 'send-value'],
      methods: {
         reportStatus() {
            this.$emit('update-state', 'updated');
         }
      }
   }
   ```
   ```vue
   <template>
      <child-component @update-state="updateStatus">
      </child-component>
   </template>
   ```
   ```js
   // parent component 
   export default {
      data() {
         return {
            status: 'pending',
         }
      },
      methods: {
         updateStatus(status) {
            this.status = status;
         }
      }
   }
   ```
   1. We can configure further on the `emit` event.
   ```js
   const app = Vue.createApp({
      props: {},
      emits: ['event-handler'],
      emits: {
         'event-handler': function(id) {
            if (id) true;
            return false;
         }
      }
      data(){},
    methods: {}
   });
   ```
5. `computed` in Vue component can have not only return a value but have a "setter" when it's called. By default only `get` is availabe. This feature can work with Vues `store` with `v-model` to change a state in the global scale. 
   1. For exmaple, we want to make an reusable "error dialog" which can pop up when any component updates its state in Vuex. 
   2. Since the `v-dialog` component not only works with itself but directive such as closing the dialog when the user clicks outside the dialog element. 
   3. Since `v-model` should be able to manipulate the "state", we can't pass a method in `computed` directly. In this case, we can have have a setter by using `set` to handle the state changing issue in global scale.
   4. Note that when [using `v-model` on a component](https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components), it actually does as the following.
      1. It sends a `props` or `non-props` attribute as `model-value` to the component
      2. It listens to `update` event emitting from the child component when the `model-value` is updated, and catches and applies the value to the state.
      3. Therefore, when we use `v-model` with `v-dialog` which is a cusotm component from vuetify.
      4. In addition, `v-model` has a breaking change from Vue 2 to 3. The official document clearly explains how does [`v-model`](https://v3.vuejs.org/guide/migration/v-model.html#v-model) works on a custom component and the different between Vue 2 and 3.
   ```vue
   <template>
      <!-- using v-model on input tag -->
      <input :value="searchText" @input="searchText = $event.target.value" />

      <!-- using v-model on a component -->
      <!-- Vue 2 syntax -->
      <!-- input method is the default, though we can change it in the child component -->
      <custom-input
         :value="searchText"
         @input="searchText = $event"
      ></custom-input>

      <!-- Vue 3 syntax -->
      <custom-input
         :model-value="searchText"
         @update:model-value="searchText = $event"
      ></custom-input>
   </template>
   ```
   1. Computed Setter - [https://vuejs.org/v2/guide/computed.html#Computed-Setter](https://vuejs.org/v2/guide/computed.html#Computed-Setter)
   ```vue
   <template>
      <v-dialog v-model="open">
         Some message...
      </v-dialog>
   </template>
   ```
   ```js
   export default {
      computed: {
         open: {
            get() {
               return this.$store.getters.open;
            },
            set(value = false) {
               this.$store.dispatch({ type: 'open', open: value });
            }
         }
      }
   }
   ```

## 2021-09-03
1. FE interview day 3
   1. CSS methods to hide HTML elements on page. [Note](../resource/posts/html_and_css/css_methods_hiding_elements.md)
   2. Create a function which takes 2 arguments (string and character) to remove the last character in the string from the given argument. 
2. Add `auth` module in NuxtJS when developing [MakeSend Driver Web](https://driver-webapp.makesend.asia/) with Vue framework. [Notes](../resource/posts/nuxt/auth_module.md)
3. [Review Vue notes](../javascript/vueTheCompleteGuide/README.md)
   1. `ref` attribute can be given to an element in vue, so it can be accessed with `this.$refs[ref_name]`.
   2. Vue app has multiple stages in its lifecycle since it's created and unmounted from the screen.
   3. Components can help Vue app manage and reduce repetitive code. A component can be reused in similar context and conditions.
   4. The entry point of a regualr Vue app is the `main.js` that handles the global setting for the whole Vue app. For example, 
      1. Adding a component here, so other components can use it directly without importing locally.
      2. Setting router and Vuex.

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