Started: 2021/10/10
End: 
Course Material: [Progressive Web App (PWA) - The Complete Guide](https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/)

- [1. Understanding the App Manifest](#1-understanding-the-app-manifest)
  - [1.1. Using an App Manifest to Make your App Installable](#11-using-an-app-manifest-to-make-your-app-installable)
  - [1.2. Adding the Manifest](#12-adding-the-manifest)
  - [1.3. Understanding App Manifest Properties](#13-understanding-app-manifest-properties)
  - [1.4. Adding Properties to the App Manifest](#14-adding-properties-to-the-app-manifest)
  - [1.5. PWAs and Browser Support](#15-pwas-and-browser-support)
  - [1.6. Using the Chrome Developer Tools](#16-using-the-chrome-developer-tools)
  - [1.7. Simulating the Web App on an Emulator](#17-simulating-the-web-app-on-an-emulator)
  - [1.8. Installing the Web App - Prerequisties](#18-installing-the-web-app---prerequisties)
  - [1.9. Adding Properties for Safari](#19-adding-properties-for-safari)
  - [1.10. Adding Properties for the Internet Explorer](#110-adding-properties-for-the-internet-explorer)
- [2. The Service Workers](#2-the-service-workers)
  - [2.1. Why Service Workers are Aamazing](#21-why-service-workers-are-aamazing)
  - [2.2. Understanding Service Worker Events](#22-understanding-service-worker-events)
  - [2.3. The Service Worker Lifecycle](#23-the-service-worker-lifecycle)
  - [2.4. Service Worker Browser Support](#24-service-worker-browser-support)
  - [2.5. Registering a Service Worker](#25-registering-a-service-worker)
  - [2.6. Reacting to Incoming Events (in SW)](#26-reacting-to-incoming-events-in-sw)
  - [2.7. Updating and Activating Service Worker](#27-updating-and-activating-service-worker)
  - [2.8. Non-Lifecycle Events](#28-non-lifecycle-events)
  - [2.9. Getting that "App Install Banner"](#29-getting-that-app-install-banner)
  - [2.10. Testing the App on Real Device (and Installing the App)](#210-testing-the-app-on-real-device-and-installing-the-app)
  - [2.11. Deferring the App Install Banner](#211-deferring-the-app-install-banner)
- [3. Promise and Fetch](#3-promise-and-fetch)
  - [3.1. Async Code in Javascript](#31-async-code-in-javascript)
  - [3.2. Promises - Basics](#32-promises---basics)
  - [3.3. Rejecting Promises](#33-rejecting-promises)
  - [3.4. Where we Use Promises in our Project](#34-where-we-use-promises-in-our-project)
  - [3.5. Fetch - Basics](#35-fetch---basics)
  - [3.6. Sending Post Requests via Fetch](#36-sending-post-requests-via-fetch)
  - [3.7. Fetch and CORS](#37-fetch-and-cors)
  - [3.8. Comparing Fetch and Ajax](#38-comparing-fetch-and-ajax)
  - [3.9. Adding Polyfills (for Legacy Browser Support)](#39-adding-polyfills-for-legacy-browser-support)
  - [3.10. Fetch and Service Workers](#310-fetch-and-service-workers)
- [4. Service Workers - Caching](#4-service-workers---caching)
  - [4.1. Why Caching](#41-why-caching)
  - [4.2. Understanding the Cache API](#42-understanding-the-cache-api)
  - [4.3. Browser Support](#43-browser-support)
  - [4.4. Adjusting the Course Project](#44-adjusting-the-course-project)
  - [4.5. Indentifying (Pre-) Cacheable Items](#45-indentifying-pre--cacheable-items)
  - [4.6. Static Caching/Precaching](#46-static-cachingprecaching)
  - [4.7. Retrieving Items from the Cache](#47-retrieving-items-from-the-cache)
  - [4.8. Adding and Retrieving Multiple Files (to/from Cache)](#48-adding-and-retrieving-multiple-files-tofrom-cache)
  - [4.9. Cache Multiple Files with addAll](#49-cache-multiple-files-with-addall)
  - [4.10. Dynamic Caching - The Basics](#410-dynamic-caching---the-basics)
  - [4.11. Implementing Deynamic Caching](#411-implementing-deynamic-caching)
  - [4.12. Handling Errors](#412-handling-errors)
  - [4.13. Adding Cache Versioning](#413-adding-cache-versioning)
  - [4.14. Different Cache Versions and Cleanup](#414-different-cache-versions-and-cleanup)
  - [4.15. Optimizing Cache Management](#415-optimizing-cache-management)
  - [4.16. Service Workers - Advanced Caching](#416-service-workers---advanced-caching)
  - [4.17. Module Preparation: Adding a Button](#417-module-preparation-adding-a-button)
  - [4.18. Offering "Cache on Demand"](#418-offering-cache-on-demand)
  - [4.19. Providing an Offline Fallback Page](#419-providing-an-offline-fallback-page)
  - [4.20. Strategy: Cache with Network Fallback](#420-strategy-cache-with-network-fallback)
  - [4.21. Strategy: Cache Only](#421-strategy-cache-only)
  - [4.22. Strategy: Network Only](#422-strategy-network-only)
  - [4.23. Strategy: Network with Cache Fallback](#423-strategy-network-with-cache-fallback)
  - [4.24. Strategy: Cache then Network](#424-strategy-cache-then-network)
  - [4.25. Cache then Network and Dynamic Caching](#425-cache-then-network-and-dynamic-caching)
  - [4.26. Cache then Network with Offline Support](#426-cache-then-network-with-offline-support)
  - [4.27. Cache Strategies and "Routing"](#427-cache-strategies-and-routing)
  - [4.28. Applying Cache Only](#428-applying-cache-only)
  - [4.29. A Better Way of Parsing Static Cache URLs](#429-a-better-way-of-parsing-static-cache-urls)
  - [4.30. A Better Way of Serving Fallback Files](#430-a-better-way-of-serving-fallback-files)
  - [4.31. Post Request and Cache API](#431-post-request-and-cache-api)
  - [4.32. Cleaning/Trimming the Cache](#432-cleaningtrimming-the-cache)
  - [4.33. Getting Rid of a Service Worker](#433-getting-rid-of-a-service-worker)
  - [4.34. Preparing the Project for the Next Steps](#434-preparing-the-project-for-the-next-steps)
- [5. IndexedDB and Dynamic Data](#5-indexeddb-and-dynamic-data)
  - [5.1. Understanding the Basics](#51-understanding-the-basics)
  - [5.2. Setting Up Firebase](#52-setting-up-firebase)
  - [5.3. Connecting Frontend to Backend](#53-connecting-frontend-to-backend)
  - [5.4. Dynamic Caching vs. Caching Dynamic Content](#54-dynamic-caching-vs-caching-dynamic-content)
  - [5.5. Introducing IndexedDB](#55-introducing-indexeddb)
  - [5.6. IndexedDB Browser Support](#56-indexeddb-browser-support)
  - [5.7. Adding the IDB File](#57-adding-the-idb-file)
  - [5.8. Storing Fetched Posts in IndexedDB](#58-storing-fetched-posts-in-indexeddb)
  - [5.9. Using IndexedDB in the Service Worker](#59-using-indexeddb-in-the-service-worker)
  - [5.10. Reading Data from IDB](#510-reading-data-from-idb)
  - [5.11. Clearing IDB and Handling Server-Client Mismatch](#511-clearing-idb-and-handling-server-client-mismatch)
  - [5.12. Implementing the Clear Database Method](#512-implementing-the-clear-database-method)
  - [5.13. Deleting Single Items from the Database](#513-deleting-single-items-from-the-database)
  - [5.14. IndexedDB and Caching Strategies](#514-indexeddb-and-caching-strategies)
- [6. Creating a Responsive user Interface (UI)](#6-creating-a-responsive-user-interface-ui)
  - [6.1. Responsive Design in this Course](#61-responsive-design-in-this-course)
  - [6.2. Responsive Design in this Course](#62-responsive-design-in-this-course)
  - [6.3. Understanding Responsive Design in our Project](#63-understanding-responsive-design-in-our-project)
  - [6.4. CSS and Media Queries](#64-css-and-media-queries)
  - [6.5. Using Images in a Responsive Way](#65-using-images-in-a-responsive-way)
  - [6.6. Adding Animations](#66-adding-animations)
  - [6.7. The Viewport and Scaling](#67-the-viewport-and-scaling)
- [7. Background Sync](#7-background-sync)
  - [7.1. Hwo does Background Sync Work](#71-hwo-does-background-sync-work)
  - [7.2. Adding the Basic Setup to our Project](#72-adding-the-basic-setup-to-our-project)
  - [7.3. Registering a Synchronization Task](#73-registering-a-synchronization-task)
  - [7.4. Storing our Post in IndexedDB](#74-storing-our-post-in-indexeddb)
  - [7.5. Adding a Fallback](#75-adding-a-fallback)
  - [7.6. Syncing Data in the Service Worker](#76-syncing-data-in-the-service-worker)
  - [7.7. Understanding Periodic Sync](#77-understanding-periodic-sync)
  - [7.8. Adding Server Side Code](#78-adding-server-side-code)
  - [7.9. Fixing Errors](#79-fixing-errors)
- [8. Web Push Notifications](#8-web-push-notifications)
  - [8.1. Why we need Web Push Notifications](#81-why-we-need-web-push-notifications)
  - [8.2. How Push and Notifications Work](#82-how-push-and-notifications-work)
  - [8.3. Displaying Notifications - Some Theory First](#83-displaying-notifications---some-theory-first)
  - [8.4. Browser Support](#84-browser-support)
  - [8.5. Requesting Permissions](#85-requesting-permissions)
  - [8.6. Displaying Notifications](#86-displaying-notifications)
  - [8.7. Notifications from Within the Service Worker](#87-notifications-from-within-the-service-worker)
  - [8.8. Understanding Notification Options](#88-understanding-notification-options)
  - [8.9. Advanced Options](#89-advanced-options)
  - [8.10. Adding Actions to Notifications](#810-adding-actions-to-notifications)
  - [8.11. Reacting to Notification Interaction - Clicks](#811-reacting-to-notification-interaction---clicks)
  - [8.12. Reacting to Notification Interaction - Closing](#812-reacting-to-notification-interaction---closing)
  - [8.13. From Notifications to Push Messages](#813-from-notifications-to-push-messages)
  - [8.14. Creating a Push Subscription](#814-creating-a-push-subscription)
  - [8.15. Storing Subscription](#815-storing-subscription)
  - [8.16. Connecting Server and Client (PWA)](#816-connecting-server-and-client-pwa)
  - [8.17. Sending Push Messges from the Server](#817-sending-push-messges-from-the-server)
  - [8.18. Listening to Push Message](#818-listening-to-push-message)
  - [8.19. Displaying Push Notification on a Real Device](#819-displaying-push-notification-on-a-real-device)
  - [8.20. Opening a Page upon User Interaction](#820-opening-a-page-upon-user-interaction)
  - [8.21. Improving our Code](#821-improving-our-code)
- [9. Native Device Features](#9-native-device-features)
  - [9.1. Preparing the Project](#91-preparing-the-project)
  - [9.2. Getting DOM Access](#92-getting-dom-access)
  - [9.3. Creating our own Polyfills](#93-creating-our-own-polyfills)
  - [9.4. Getting the Video Image](#94-getting-the-video-image)
  - [9.5. Hooking Up the Capture Button](#95-hooking-up-the-capture-button)
  - [9.6. Storing the Image on a Server](#96-storing-the-image-on-a-server)
  - [9.7. Accepting File Upload Example with Firebase](#97-accepting-file-upload-example-with-firebase)
  - [9.8. Testing the Camera and Upload](#98-testing-the-camera-and-upload)
  - [9.9. Implementing a Fallback](#99-implementing-a-fallback)
  - [9.10. Getting the User Position](#910-getting-the-user-position)
  - [9.11. Fixing Bugs](#911-fixing-bugs)
  - [9.12. Testing the App on a Real Device](#912-testing-the-app-on-a-real-device)
- [10. Service Worker Management with Workbox](#10-service-worker-management-with-workbox)
  - [10.1. Understanding the Basics](#101-understanding-the-basics)
  - [10.2. Installing Workbox and Using it](#102-installing-workbox-and-using-it)
  - [10.3. Configuring Workbox Precaching](#103-configuring-workbox-precaching)
  - [10.4. Customizing the Service Worker](#104-customizing-the-service-worker)
  - [10.5. Implementing Routing with the Workbox Router](#105-implementing-routing-with-the-workbox-router)
  - [10.6. Expanding Dynamic Caching](#106-expanding-dynamic-caching)
  - [10.7. Options and Setting Up Strategies](#107-options-and-setting-up-strategies)
  - [10.8. Custom Handlers (Example: For IndexedDB)](#108-custom-handlers-example-for-indexeddb)
  - [10.9. Providing an Offline HTML Fallback](#109-providing-an-offline-html-fallback)
  - [10.10. Handling Background Synchronisation and Push Notification](#1010-handling-background-synchronisation-and-push-notification)
  - [10.11. Understanding the Workbox Documentation](#1011-understanding-the-workbox-documentation)
  - [10.12. Enhancing the Build Workflow](#1012-enhancing-the-build-workflow)
  - [10.13. Running our App on a Real Server](#1013-running-our-app-on-a-real-server)
  - [10.14. Auditing our Webpage with Lighthouse](#1014-auditing-our-webpage-with-lighthouse)
- [11. SPAs and PWAs](#11-spas-and-pwas)
  - [11.1. React with create-react-app](#111-react-with-create-react-app)
  - [11.2. A General Note about SPAs and PWAs](#112-a-general-note-about-spas-and-pwas)
  - [11.3. Angular with the CLI](#113-angular-with-the-cli)
  - [11.4. Vue with Vue CLI](#114-vue-with-vue-cli)

---

# 1. Understanding the App Manifest
## 1.1. Using an App Manifest to Make your App Installable
1. This `Manifest` is a single file that allows the users to add or "install" the web page on the home screen of a mobile device as an app.

## 1.2. Adding the Manifest
1. We can add `manifest.json` to the root directory of the web. In this case, we put in the `public` folder which is directory storing `index.html`.
2. Then we add a `link` referring to `manifest.json` in all the HTML file that we will serve. If we are creating a SPA with React or Vue, we can simply add this into the entry, single `index.html`.
  ```html
  <html>
    <link rel="manifest" href="/manifest.json">
  </html>
  ```

## 1.3. Understanding App Manifest Properties
1. We can give a `name` property for the PWA which is different from the "title" of the HTML file. This is the long name of the app and will show such as when using on the "Splashscreen".
2. A `short_name` can be given and will be shown belown the icon.
3. `start_url` is to indicate which page to load on startup. Note that this is very different from the URL we type in the search bar in a browser that is handled by a DNS. 
4. `scope` is to show which pages are included in the PWA experience. 
5. `display` can be set `standalone` to make the app looks like a standalone app. This includes options such as `standalone`, `fullscreen`, `minimal-ui`, `browser`. 
6. `background_color` can set the background color whilst loading and on Splashscreen. 
7. `theme_color` is the Theme color of the app which can affect components such as the top bar in task switcher.
8. `orientation` is used to set and enforce default orientation of the app. It may be `any`, `portrait`, `landscape`, `portrait-primary`.
9. Other properties can be also useful to set up in the manifest files in the JSON sample below.
  ```json
  // manifest.json
  {
    "name": "", // long name of the app (e.g. Splashscreen)
    "short_name": "", // short name of the app (e.g. below icon)
    "start_url" : "/index.html", // which page to load on startup
    "scope": ".", // which pages are included in "PWA experience"
    "display": "standalone", // should it look like a standalone app?
    "background_color": "#fff", // can set the background color whilst loading and on Splashscreen
    "theme_color": "#3F51B5", // theme color (e.g. on top bar in task switcher)
    "description": "Keep running", // description (e.g. favorite)
    "dir": "ltr", // read direction of the app
    "lang": "en-US", // main language of app
    "orientation": "portrait-primary", // set (and enforce) default orientation
    "icons": [ // configure icons (e.g. on homescreen)
      {
        "src": "/src/images/icons/app-icon-48x48.png", // icon path
        "type": "image/png", // image type
        "sizes": "48x48", // icon size, browser chooses best one for given device
      },
      {
        "src": "/src/images/icons/app-icon-96x96.png", // icon path
        "type": "image/png", // image type
        "sizes": "96x96", // icon size, browser chooses best one for given device
      },
    ], 
  },
  "related_application": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    }
  ]
  ```

## 1.4. Adding Properties to the App Manifest
```json
{
  "name": "Instagram as Progressive Web App",
  "short_name": "PWAGram",
  "icons": [
    {
      "src": "/src/images/icons/app-icon-48x48.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "/src/images/icons/app-icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "/src/images/icons/app-icon-144x144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "/src/images/icons/app-icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/src/images/icons/app-icon-256x256.png",
      "type": "image/png",
      "sizes": "256x256"
    },
    {
      "src": "/src/images/icons/app-icon-384x384.png",
      "type": "image/png",
      "sizes": "384x384"
    },
    {
      "src": "/src/images/icons/app-icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/index.html",
  "scope": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#fff",
  "theme_color": "#3f51b5",
  "description": "A simple Instagram Clone, implementing a lot of PWA love.",
  "dir": "ltr",
  "lang": "en-US"
}
```

## 1.5. PWAs and Browser Support
1. Chrome at the time has the most compatibility to use PWA features.
2. We can check from "[caniuse](https://caniuse.com/?search=PWA)" to see if the browser has fully support on PWA features.

## 1.6. Using the Chrome Developer Tools
1. In Chrome browser, we can check on the developer console for detailed data.

## 1.7. Simulating the Web App on an Emulator
1. We can download android studio and install a virtual device on the computer to have an emulator of a sepcific android device. 
2. After installing android studio and the device, we can access the emulator from "Tools" > "AVD Manager".
3. However, if there's an android device available, we can access the local PWA via WIFI when starting up the project. Note that both the computer serving localhost and the mobile phone must connect to the same WIFI and there shouldn't be any gat threshold besides simple login connection.
4. The other way to work around is to have the android mobile phone having USB debugging and connect to computer with a cable. 

## 1.8. Installing the Web App - Prerequisties
1. We can visit [https://web.dev/customize-install/](https://web.dev/customize-install/) to check the latest requirements to prompt an install banner to let users easily download and add the PWA to their homescreens.

## 1.9. Adding Properties for Safari
1. We can add other tags in the HTML tag to enable the PWA works with Safari.
2. Note that Apple devices having their browser built on Safari and webkit, while these devices don't have fully support as the Chrome browsers on Android devices. 
3. For example, by the time learnig this course during Oct. 2021, "Push Notification" feature is still not available on PWAs on Apple devices.
  ```html
  <html>
    <!-- other tags of the HTML -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="PWAGramiOS">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-57x57.png" sizes="57x57">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-60x60.png" sizes="60x60">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-72x72.png" sizes="72x72">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-114x114.png" sizes="114x114">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-120x120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-144x144.png" sizes="144x144">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-152x152.png" sizes="152x152">
    <link rel="apple-touch-icon" href="/src/images/icons/app-icon-180x180.png" sizes="180x180">
  </html>
  ```
## 1.10. Adding Properties for the Internet Explorer
1. For Internet Exploerer (though it's deprecated by Microsoft in Year 2021), we can specify some `meta` tags
  ```html
  <html>
    <meta name="msapplication-TileImage" content="/src/images/app-icon-144x144.png" />
    <meta name="msapplication-TileColor" content="#fff" />
    <!-- the following is a fallback which can be helpful on Chrome browser when manifest.json doesn't work -->
    <meta name="theme-color" content="#3F51B5" />
  </html>
  ```

# 2. The Service Workers
## 2.1. Why Service Workers are Aamazing
## 2.2. Understanding Service Worker Events
## 2.3. The Service Worker Lifecycle
## 2.4. Service Worker Browser Support
## 2.5. Registering a Service Worker
## 2.6. Reacting to Incoming Events (in SW)
## 2.7. Updating and Activating Service Worker
## 2.8. Non-Lifecycle Events
## 2.9. Getting that "App Install Banner"
## 2.10. Testing the App on Real Device (and Installing the App)
## 2.11. Deferring the App Install Banner
# 3. Promise and Fetch
## 3.1. Async Code in Javascript
## 3.2. Promises - Basics
## 3.3. Rejecting Promises
## 3.4. Where we Use Promises in our Project
## 3.5. Fetch - Basics
## 3.6. Sending Post Requests via Fetch
## 3.7. Fetch and CORS
## 3.8. Comparing Fetch and Ajax
## 3.9. Adding Polyfills (for Legacy Browser Support)
## 3.10. Fetch and Service Workers
# 4. Service Workers - Caching
## 4.1. Why Caching
## 4.2. Understanding the Cache API
## 4.3. Browser Support
## 4.4. Adjusting the Course Project
## 4.5. Indentifying (Pre-) Cacheable Items
## 4.6. Static Caching/Precaching
## 4.7. Retrieving Items from the Cache
## 4.8. Adding and Retrieving Multiple Files (to/from Cache)
## 4.9. Cache Multiple Files with addAll
## 4.10. Dynamic Caching - The Basics
## 4.11. Implementing Deynamic Caching
## 4.12. Handling Errors
## 4.13. Adding Cache Versioning
## 4.14. Different Cache Versions and Cleanup
## 4.15. Optimizing Cache Management
## 4.16. Service Workers - Advanced Caching
## 4.17. Module Preparation: Adding a Button
## 4.18. Offering "Cache on Demand"
## 4.19. Providing an Offline Fallback Page
## 4.20. Strategy: Cache with Network Fallback
## 4.21. Strategy: Cache Only
## 4.22. Strategy: Network Only
## 4.23. Strategy: Network with Cache Fallback
## 4.24. Strategy: Cache then Network 
## 4.25. Cache then Network and Dynamic Caching
## 4.26. Cache then Network with Offline Support
## 4.27. Cache Strategies and "Routing"
## 4.28. Applying Cache Only
## 4.29. A Better Way of Parsing Static Cache URLs
## 4.30. A Better Way of Serving Fallback Files
## 4.31. Post Request and Cache API
## 4.32. Cleaning/Trimming the Cache
## 4.33. Getting Rid of a Service Worker
## 4.34. Preparing the Project for the Next Steps
# 5. IndexedDB and Dynamic Data
## 5.1. Understanding the Basics
## 5.2. Setting Up Firebase
## 5.3. Connecting Frontend to Backend
## 5.4. Dynamic Caching vs. Caching Dynamic Content
## 5.5. Introducing IndexedDB
## 5.6. IndexedDB Browser Support
## 5.7. Adding the IDB File
## 5.8. Storing Fetched Posts in IndexedDB
## 5.9. Using IndexedDB in the Service Worker
## 5.10. Reading Data from IDB
## 5.11. Clearing IDB and Handling Server-Client Mismatch
## 5.12. Implementing the Clear Database Method
## 5.13. Deleting Single Items from the Database
## 5.14. IndexedDB and Caching Strategies
# 6. Creating a Responsive user Interface (UI)
## 6.1. Responsive Design in this Course
## 6.2. Responsive Design in this Course
## 6.3. Understanding Responsive Design in our Project
## 6.4. CSS and Media Queries
## 6.5. Using Images in a Responsive Way
## 6.6. Adding Animations
## 6.7. The Viewport and Scaling
# 7. Background Sync
## 7.1. Hwo does Background Sync Work
## 7.2. Adding the Basic Setup to our Project
## 7.3. Registering a Synchronization Task
## 7.4. Storing our Post in IndexedDB
## 7.5. Adding a Fallback
## 7.6. Syncing Data in the Service Worker
## 7.7. Understanding Periodic Sync
## 7.8. Adding Server Side Code
## 7.9. Fixing Errors
# 8. Web Push Notifications
## 8.1. Why we need Web Push Notifications
## 8.2. How Push and Notifications Work
## 8.3. Displaying Notifications - Some Theory First
## 8.4. Browser Support
## 8.5. Requesting Permissions
## 8.6. Displaying Notifications
## 8.7. Notifications from Within the Service Worker
## 8.8. Understanding Notification Options
## 8.9. Advanced Options
## 8.10. Adding Actions to Notifications
## 8.11. Reacting to Notification Interaction - Clicks
## 8.12. Reacting to Notification Interaction - Closing
## 8.13. From Notifications to Push Messages
## 8.14. Creating a Push Subscription
## 8.15. Storing Subscription
## 8.16. Connecting Server and Client (PWA)
## 8.17. Sending Push Messges from the Server
## 8.18. Listening to Push Message
## 8.19. Displaying Push Notification on a Real Device
## 8.20. Opening a Page upon User Interaction
## 8.21. Improving our Code
# 9. Native Device Features
## 9.1. Preparing the Project
## 9.2. Getting DOM Access
## 9.3. Creating our own Polyfills
## 9.4. Getting the Video Image
## 9.5. Hooking Up the Capture Button
## 9.6. Storing the Image on a Server
## 9.7. Accepting File Upload Example with Firebase
## 9.8. Testing the Camera and Upload
## 9.9. Implementing a Fallback
## 9.10. Getting the User Position
## 9.11. Fixing Bugs
## 9.12. Testing the App on a Real Device
# 10. Service Worker Management with Workbox
## 10.1. Understanding the Basics
## 10.2. Installing Workbox and Using it
## 10.3. Configuring Workbox Precaching
## 10.4. Customizing the Service Worker
## 10.5. Implementing Routing with the Workbox Router
## 10.6. Expanding Dynamic Caching
## 10.7. Options and Setting Up Strategies
## 10.8. Custom Handlers (Example: For IndexedDB)
## 10.9. Providing an Offline HTML Fallback
## 10.10. Handling Background Synchronisation and Push Notification
## 10.11. Understanding the Workbox Documentation
## 10.12. Enhancing the Build Workflow
## 10.13. Running our App on a Real Server
## 10.14. Auditing our Webpage with Lighthouse
# 11. SPAs and PWAs
## 11.1. React with create-react-app
## 11.2. A General Note about SPAs and PWAs
## 11.3. Angular with the CLI
## 11.4. Vue with Vue CLI
