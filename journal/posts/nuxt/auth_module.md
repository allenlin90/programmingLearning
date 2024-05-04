# auth module in Nuxt JS
Date: 2021/09/03

## Reference
1. [nuxt/auth](https://auth.nuxtjs.org/)
2. [Nuxt Auth - Authentication and Authorization in NuxtJS](https://youtu.be/zzUpO8tXoaw)

## Hints
1. Ensure `store` and Vuex are available in the project. Empty `store` directory may not have Vuex enabled and can have weird output from `auth` and its redirecting functions.
2. In vue components, we can use `$auth.isLoggedIn` to check if the user is logged in and if an element should show.
3. To login the user, we can use `$auth.loginWith('strategy', {options})`. `options` are those for axios requests. We can set up not only `headers` but also other properties in [request config](https://github.com/axios/axios#request-config). 
  ```js
  $auth.loginWith('local', {
    data: {
      username: 'foo',
      password: 'bar'
    }
  })
  ```
4. Configurations can be very tricky
  ```js
  // nuxt.config.js
  export default {
    // axios
    axios: { // default route in axios
      baseURL: "http://localhost:3000"
    },

    // auth
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: "/auth/login", method: "POST" },
            user: {
              url: "/auth", 
              method: "GET",
              headers: { credentials: "makesend_sorting" }
            },
            logout: false // turn off logout request, but be careful with JWT strategy!
            // logout: { url: "/auth/logout", method: "POST" }
          }
        }
      },
      redirect: {
        login: "/",
        logout: "/login",
        home: "/"
      }
    },

    // router
    router: {
      middleware: ["auth"]
    }
  }
  ```

## Setup
1. Install `@nuxtjs/axios` and `@nuxtjs/auth-next` with npm and add to `nuxt.config.js`.
  ```js
  // nuxt.config.js
  export default {
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth-next'
    ],
    auth: {
      // Options
    }
  }
  ```

## Middleware
1. To enable the `auth` middleware globally, we can put it in `nuxt.config.js`. 
  ```js
  // nuxt.config.js
  export default {
    middleware: ['auth'],
  }
  ```
2. In case we want certain route or component to be public, we can turn it off in the component vue file. Besides, we can redirect the user to `/home` route if the user is logged in.
  ```vue
  <script>
  // a vue component
  export default {
    auth: false,   // turn the component to public 
    auth: 'guest', // redirect the user to home if it's logged in 
    data() {
      return {};
    }
  }
  </script>
  ```
3. We can create custom middelware
  ```js
  // custom middelware to check user profile and status
  // middleware/auth-admin.js
  export default function (context) {
    const { $auth, redirect, store } = context;
    let user = $auth.state.user;
    if (user && user.admin) { // check if the user is admin

    } else {
      store.dispatch('error/errorMessage', { 
        color: 'red', 
        conetnt: 'unauthorized user'
      });
      redirect('/');
    }
  }
  ```

## Schemes
1. We can configure or create custom scheme for customized authentication strategies. All the configurations are setting in `nuxt.config.js`.
  ```js
  // nuxt.config.js
  export default {
    auth: {
      strategies: {
        local: {},
        github: {},
        facebook: {},
      }
    }
  }
  ```