Start
End

- [1. Flutter Basics [QUIZ APP]](#1-flutter-basics-quiz-app)
  - [1.1. Creating a New Project](#11-creating-a-new-project)
  - [1.2. An Overview of the Generated Files and Folders](#12-an-overview-of-the-generated-files-and-folders)
  - [1.3. Analyzing the Default App](#13-analyzing-the-default-app)
  - [1.4. Dart Basics](#14-dart-basics)
  - [1.5. More Dart Basics](#15-more-dart-basics)
  - [1.6. Building an App From Scratch](#16-building-an-app-from-scratch)
  - [1.7. Running the App on an Emulator](#17-running-the-app-on-an-emulator)
  - [1.8. Class Constructors and Named Arguments](#18-class-constructors-and-named-arguments)
  - [1.9. First Summary and Additional Syntax](#19-first-summary-and-additional-syntax)
  - [1.10. Building a Widget Tree](#110-building-a-widget-tree)
  - [1.11. Visible (Input/Output) and Invisible (Layout/Control) Widgets](#111-visible-inputoutput-and-invisible-layoutcontrol-widgets)
  - [1.12. Adding Layout Widgets](#112-adding-layout-widgets)
  - [1.13. Connecting Functions and Buttons](#113-connecting-functions-and-buttons)
  - [1.14. Anonymous Functions](#114-anonymous-functions)
  - [1.15. Updating Widget Data (Or: Using Stateless Widget Incorrectly)](#115-updating-widget-data-or-using-stateless-widget-incorrectly)
  - [1.16. Updating Correctly with Stateful Widgets](#116-updating-correctly-with-stateful-widgets)
  - [1.17. A Brief Look Under The Hood](#117-a-brief-look-under-the-hood)
  - [1.18. Using Private Properties](#118-using-private-properties)
  - [1.19. Creating a New, Custom Widget](#119-creating-a-new-custom-widget)
  - [1.20. First Styling and Layouting Steps](#120-first-styling-and-layouting-steps)
  - [1.21. Enums and Multiple Constructors](#121-enums-and-multiple-constructors)
  - [1.22. Offical Docs and the Widget Catalog](#122-offical-docs-and-the-widget-catalog)
  - [1.23. Passing Callback Functions Around](#123-passing-callback-functions-around)
  - [1.24. Introducing Maps](#124-introducing-maps)
  - [1.25. Mapping Lists to Widgets](#125-mapping-lists-to-widgets)
  - [1.26. final vs const](#126-final-vs-const)
  - [1.27. Introducing "if" Statements](#127-introducing-if-statements)
  - [1.28. [DART DEEP DIVE] More on "if" Statements](#128-dart-deep-dive-more-on-if-statements)
  - [1.29. [DART DEEP DIVE] The "null" Value](#129-dart-deep-dive-the-null-value)
  - [1.30. Outputting Widgets Conditionally](#130-outputting-widgets-conditionally)
  - [1.31. Splitting the App Into Widgets](#131-splitting-the-app-into-widgets)
  - [1.32. Calculating a Total Score](#132-calculating-a-total-score)
  - [1.33. Getters and "else-if"](#133-getters-and-else-if)
  - [1.34. resetting the Quiz](#134-resetting-the-quiz)
- [2. Running Apps on Different Devices and Debugging Apps](#2-running-apps-on-different-devices-and-debugging-apps)
  - [2.1. Running the App on a Real Android Device](#21-running-the-app-on-a-real-android-device)
  - [2.2. Running the App on a Real iOS Emulator](#22-running-the-app-on-a-real-ios-emulator)
  - [2.3. Running the App on a Real iOS Device](#23-running-the-app-on-a-real-ios-device)
  - [2.4. Working with the Emulators/Using the Emulators](#24-working-with-the-emulatorsusing-the-emulators)
  - [2.5. Understanding Error Messages and Fixing Errors](#25-understanding-error-messages-and-fixing-errors)
  - [2.6. Using the Debugger](#26-using-the-debugger)
  - [2.7. Getting Started with the Dart DevTools](#27-getting-started-with-the-dart-devtools)
  - [2.8. Understanding the Repaint Rainbow](#28-understanding-the-repaint-rainbow)
  - [2.9. Wrapping up teh Dart DevTools](#29-wrapping-up-teh-dart-devtools)
- [3. Widgets, Styling, Adding Logic - Building a Real App [PERSONAL EXPENSES APP]](#3-widgets-styling-adding-logic---building-a-real-app-personal-expenses-app)
  - [3.1. An Overview of the Core Flutter Widgets](#31-an-overview-of-the-core-flutter-widgets)
  - [3.2. Planning the App](#32-planning-the-app)
  - [3.3. Combinging Widgets](#33-combinging-widgets)
  - [3.4. Understanding Column Alignment](#34-understanding-column-alignment)
  - [3.5. Not a Widget: Adding a Transaction Model and Transaction Data](#35-not-a-widget-adding-a-transaction-model-and-transaction-data)
  - [3.6. Mapping Data Into Widgets](#36-mapping-data-into-widgets)
  - [3.7. Building a Custom List Item](#37-building-a-custom-list-item)
  - [3.8. Styling a Container](#38-styling-a-container)
  - [3.9. Styling Text](#39-styling-text)
  - [3.10. More Styling!](#310-more-styling)
  - [3.11. Containers vs Columns vs Rows](#311-containers-vs-columns-vs-rows)
  - [3.12. Using String Interpolation](#312-using-string-interpolation)
  - [3.13. Installing External Packages and Formatting Dates](#313-installing-external-packages-and-formatting-dates)
  - [3.14. Adding Text Input Widgets (TextField)](#314-adding-text-input-widgets-textfield)
  - [3.15. Fetching User Input](#315-fetching-user-input)
  - [3.16. Splitting the App Into Widgets](#316-splitting-the-app-into-widgets)
  - [3.17. Connecting Widgets and Managing Data/State](#317-connecting-widgets-and-managing-datastate)
  - [3.18. Adding User Transaction to the List](#318-adding-user-transaction-to-the-list)
  - [3.19. Making the List Scrollable!](#319-making-the-list-scrollable)
  - [3.20. Working with ListViews](#320-working-with-listviews)
  - [3.21. Further Input and Output Styling and Configuration](#321-further-input-and-output-styling-and-configuration)
  - [3.22. Adding AppBar Buttons and Floating Action Buttons](#322-adding-appbar-buttons-and-floating-action-buttons)
  - [3.23. Showing a Modal Bottom Sheet](#323-showing-a-modal-bottom-sheet)
  - [3.24. Improving and Styling the Modal Bottom Sheet](#324-improving-and-styling-the-modal-bottom-sheet)
  - [3.25. Configuring and Using Themes](#325-configuring-and-using-themes)
  - [3.26. Custom Fonts and Working with Text Themes](#326-custom-fonts-and-working-with-text-themes)
  - [3.27. Adding Images to the App](#327-adding-images-to-the-app)
  - [3.28. Planning the Chart Widget](#328-planning-the-chart-widget)
  - [3.29. Looping Through Lists](#329-looping-through-lists)
  - [3.30. Deriving Recent Transactions](#330-deriving-recent-transactions)
  - [3.31. Creating Bars for our Chart](#331-creating-bars-for-our-chart)
  - [3.32. Populating the Chart with Values](#332-populating-the-chart-with-values)
  - [3.33. Finishing the Chart Bars](#333-finishing-the-chart-bars)
  - [3.34. Flexible and Expanded: Deep Dive](#334-flexible-and-expanded-deep-dive)
  - [3.35. Adding a ListTile Widget](#335-adding-a-listtile-widget)
  - [3.36. Improving the Overall Chart](#336-improving-the-overall-chart)
  - [3.37. Widgets and Configuring Widgets - Summary/Overview](#337-widgets-and-configuring-widgets---summaryoverview)
  - [3.38. Getting Started with Date Selection](#338-getting-started-with-date-selection)
  - [3.39. Showing a DatePicker](#339-showing-a-datepicker)
  - [3.40. Adding Transaction with a Date](#340-adding-transaction-with-a-date)
  - [3.41. Deleting Transaction and Using IconButtons](#341-deleting-transaction-and-using-iconbuttons)
  - [3.42. Final Polishing!](#342-final-polishing)
- [4. Responsive and Adaptive User Interfaces and Apps](#4-responsive-and-adaptive-user-interfaces-and-apps)
  - [4.1. What does "Responsive" and "Adaptive" Mean?](#41-what-does-responsive-and-adaptive-mean)
  - [4.2. Examples: Where we could improve the App!](#42-examples-where-we-could-improve-the-app)
  - [4.3. Calculating Sizes Dynamically](#43-calculating-sizes-dynamically)
  - [4.4. Using the LayoutBuilder Widget](#44-using-the-layoutbuilder-widget)
  - [4.5. Controlling the Device Orientation](#45-controlling-the-device-orientation)
  - [4.6. Rendering Alternative Landscape Content - 1](#46-rendering-alternative-landscape-content---1)
  - [4.7. Finishing Landscape Mode](#47-finishing-landscape-mode)
  - [4.8. Showing Different Content Based on Device Orientation](#48-showing-different-content-based-on-device-orientation)
  - [4.9. Respecting the Softkeyboard Insets](#49-respecting-the-softkeyboard-insets)
  - [4.10. Using the Device Size in Conditions](#410-using-the-device-size-in-conditions)
  - [4.11. Managing the MediaQuery Object](#411-managing-the-mediaquery-object)
  - [4.12. Checking the Device Platform](#412-checking-the-device-platform)
  - [4.13. Using Cupertino (iOS) Widgets](#413-using-cupertino-ios-widgets)
  - [4.14. Using the SafeArea](#414-using-the-safearea)
  - [4.15. More Cupertino Styles](#415-more-cupertino-styles)
  - [4.16. Using Cupertino Buttons](#416-using-cupertino-buttons)
  - [4.17. Creating Custom Adaptive Widgets](#417-creating-custom-adaptive-widgets)
- [5. Widget and Flutter Internals - Deep Dive](#5-widget-and-flutter-internals---deep-dive)
  - [5.1. The Problem At Hand](#51-the-problem-at-hand)
  - [5.2. Widget Tree and Element Tree - What, Why and How?](#52-widget-tree-and-element-tree---what-why-and-how)
  - [5.3. How Flutter Rebuilds and Repaint the Screen](#53-how-flutter-rebuilds-and-repaint-the-screen)
  - [5.4. How Flutter Executes build()](#54-how-flutter-executes-build)
  - [5.5. Using "cosnt" Widgets and Constructors](#55-using-cosnt-widgets-and-constructors)
  - [5.6. Writing Good Code](#56-writing-good-code)
  - [5.7. Extracting Widgets](#57-extracting-widgets)
  - [5.8. Using Builder Methods](#58-using-builder-methods)
  - [5.9. Understanding the Widget Lifecycle](#59-understanding-the-widget-lifecycle)
  - [5.10. Understanding the App Lifecycle](#510-understanding-the-app-lifecycle)
  - [5.11. Understanding Context](#511-understanding-context)
  - [5.12. A Problem with Lists and Stateful Widgets](#512-a-problem-with-lists-and-stateful-widgets)
  - [5.13. Understanding the Problem Root](#513-understanding-the-problem-root)
  - [5.14. Using Keys](#514-using-keys)
- [6. Navigation and Multiple Screens [MEALS APP]](#6-navigation-and-multiple-screens-meals-app)
  - [6.1. Planning the App](#61-planning-the-app)
  - [6.2. Starting with the App - Adding Base Data](#62-starting-with-the-app---adding-base-data)
  - [6.3. Creating a Grid and Working with Linear Gradients](#63-creating-a-grid-and-working-with-linear-gradients)
  - [6.4. Registering a Screen as the Main Screen](#64-registering-a-screen-as-the-main-screen)
  - [6.5. Styling and Theming](#65-styling-and-theming)
  - [6.6. Naviagating to a New Page](#66-naviagating-to-a-new-page)
  - [6.7. Passing Data via the Constructor](#67-passing-data-via-the-constructor)
  - [6.8. Using Named Routes and Passing Data with Named Routes](#68-using-named-routes-and-passing-data-with-named-routes)
  - [6.9. Diving Deeper into Named Routes](#69-diving-deeper-into-named-routes)
  - [6.10. Adding a Meal Model and Data](#610-adding-a-meal-model-and-data)
  - [6.11. Selecting Meals for a Chosen Category](#611-selecting-meals-for-a-chosen-category)
  - [6.12. Displaying Recipe Items and Using Network Images](#612-displaying-recipe-items-and-using-network-images)
  - [6.13. Finishing the Meal List Item](#613-finishing-the-meal-list-item)
  - [6.14. Navigating to the Meal Detail Page](#614-navigating-to-the-meal-detail-page)
  - [6.15. onGenerateRoute and onUnknownRoute](#615-ongenerateroute-and-onunknownroute)
  - [6.16. Finishing the Meal Detail Page](#616-finishing-the-meal-detail-page)
  - [6.17. Adding a TabBar to the Appbar](#617-adding-a-tabbar-to-the-appbar)
  - [6.18. Adding a Bottom TabBar](#618-adding-a-bottom-tabbar)
  - [6.19. Adding a Custom Drawer](#619-adding-a-custom-drawer)
  - [6.20. Adding Links to the Drawer](#620-adding-links-to-the-drawer)
  - [6.21. Replacing Pages (Instead of Pushing)](#621-replacing-pages-instead-of-pushing)
  - [6.22. Popping Pages and Passing Data Back](#622-popping-pages-and-passing-data-back)
  - [6.23. Adding Filter Switches](#623-adding-filter-switches)
  - [6.24. Adding Filter Logic](#624-adding-filter-logic)
  - [6.25. Adding a "Mark as Favorite" Feature](#625-adding-a-mark-as-favorite-feature)
  - [6.26. A Problem!](#626-a-problem)
- [7. State Management [SHOP APP]](#7-state-management-shop-app)
  - [7.1. Planning the App](#71-planning-the-app)
  - [7.2. Defining a Data Model](#72-defining-a-data-model)
  - [7.3. Working on the "Products" Grid and Item Widgets](#73-working-on-the-products-grid-and-item-widgets)
  - [7.4. Styling and Theming the App](#74-styling-and-theming-the-app)
  - [7.5. Adding Navigation to the App](#75-adding-navigation-to-the-app)
  - [7.6. Why State Management? And what is "State" and "State Management"?](#76-why-state-management-and-what-is-state-and-state-management)
  - [7.7. Understanding the "Provider" Package and Approach](#77-understanding-the-provider-package-and-approach)
  - [7.8. Working with Providers and Listeners](#78-working-with-providers-and-listeners)
  - [7.9. [DART DEEP DIVE] Inheritance ("extends") vs Mixins ("with")](#79-dart-deep-dive-inheritance-extends-vs-mixins-with)
  - [7.10. Listening in Different Places and Ways](#710-listening-in-different-places-and-ways)
  - [7.11. Using Nested Models and Providers](#711-using-nested-models-and-providers)
  - [7.12. Exploring Alternative Provider Syntaxes](#712-exploring-alternative-provider-syntaxes)
  - [7.13. Using "Consumer" instead of "Proivder.of"](#713-using-consumer-instead-of-proivderof)
  - [7.14. Local State vs App-wide State](#714-local-state-vs-app-wide-state)
  - [7.15. Adding Shopping Cart Data](#715-adding-shopping-cart-data)
  - [7.16. Working with Multiple Providers](#716-working-with-multiple-providers)
  - [7.17. Connecting the Cart Provider](#717-connecting-the-cart-provider)
  - [7.18. Working on the Shopping Cart and Displaying a Total](#718-working-on-the-shopping-cart-and-displaying-a-total)
  - [7.19. Displaying a List of Cart Items](#719-displaying-a-list-of-cart-items)
  - [7.20. Making Cart Items Dismissible](#720-making-cart-items-dismissible)
  - [7.21. Adding Product Detail Data](#721-adding-product-detail-data)
  - [7.22. Providing an Orders Object](#722-providing-an-orders-object)
  - [7.23. Adding Orders](#723-adding-orders)
  - [7.24. Addnig an Orders Screen](#724-addnig-an-orders-screen)
  - [7.25. Using a Side Drawer](#725-using-a-side-drawer)
  - [7.26. Making Orders Expandable and Stateful Widgets vs Providers](#726-making-orders-expandable-and-stateful-widgets-vs-providers)
- [8. Working with User Input and Forms [SHOP APP]](#8-working-with-user-input-and-forms-shop-app)
  - [8.1. Snackbars and Undoing "Add to Cart" Actions](#81-snackbars-and-undoing-add-to-cart-actions)
  - [8.2. Showing Alert Dialogs](#82-showing-alert-dialogs)
  - [8.3. Adding a "Manage Products" Page](#83-adding-a-manage-products-page)
  - [8.4. "Edit Product" Screen and A Problem](#84-edit-product-screen-and-a-problem)
  - [8.5. Using Forms and Working with Form Inputs](#85-using-forms-and-working-with-form-inputs)
  - [8.6. Managing Form Input Focus](#86-managing-form-input-focus)
  - [8.7. Multiline Inputs and Disposing Objects](#87-multiline-inputs-and-disposing-objects)
  - [8.8. Image Input and Image Preview](#88-image-input-and-image-preview)
  - [8.9. Submitting Forms](#89-submitting-forms)
  - [8.10. Validating User Input](#810-validating-user-input)
  - [8.11. Adding Validation to All Inputs](#811-adding-validation-to-all-inputs)
  - [8.12. Saving New Products](#812-saving-new-products)
  - [8.13. Time to Update Products!](#813-time-to-update-products)
  - [8.14. Allowing Users to Delete Products](#814-allowing-users-to-delete-products)
- [9. Sending HTTP Requests [SHOP APP]](#9-sending-http-requests-shop-app)
  - [9.1. On-Device vs Web Storage](#91-on-device-vs-web-storage)
  - [9.2. How to Connect Flutter to a Database](#92-how-to-connect-flutter-to-a-database)
  - [9.3. Preparing Our Backend](#93-preparing-our-backend)
  - [9.4. How to Send HTTP Requests](#94-how-to-send-http-requests)
  - [9.5. Sending POST Requests](#95-sending-post-requests)
  - [9.6. Working with Futures in Dart](#96-working-with-futures-in-dart)
  - [9.7. [DART DEEP DIVE] Futures and Async Code](#97-dart-deep-dive-futures-and-async-code)
  - [9.8. Showing a Loading Indicator](#98-showing-a-loading-indicator)
  - [9.9. Handling Errors Gracefully](#99-handling-errors-gracefully)
  - [9.10. Working with "async" and "await"](#910-working-with-async-and-await)
  - [9.11. Fetching Data, iniStateand and "of(context)"](#911-fetching-data-inistateand-and-ofcontext)
  - [9.12. How to Transform Fetched Data](#912-how-to-transform-fetched-data)
  - [9.13. Implementing Pull-to-Refresh](#913-implementing-pull-to-refresh)
  - [9.14. Updating Data via PATCH Requests](#914-updating-data-via-patch-requests)
  - [9.15. Utilizing Optimistic Updating](#915-utilizing-optimistic-updating)
  - [9.16. Creating Custom Exceptions and More Error Handling](#916-creating-custom-exceptions-and-more-error-handling)
  - [9.17. A Challenge for You!](#917-a-challenge-for-you)
  - [9.18. Updating the "Favorite" Status Optimistically](#918-updating-the-favorite-status-optimistically)
  - [9.19. Storing Orders in the Web](#919-storing-orders-in-the-web)
  - [9.20. Fetching Orders and Fixing an Issue](#920-fetching-orders-and-fixing-an-issue)
  - [9.21. Using the "FutureBuilder" Widget and Improve the Code](#921-using-the-futurebuilder-widget-and-improve-the-code)
- [10. Adding User Authentication [SHOP APP]](#10-adding-user-authentication-shop-app)
  - [10.1. How Authentication Works](#101-how-authentication-works)
  - [10.2. Prepare Backend](#102-prepare-backend)
  - [10.3. Adding the Auth Screen](#103-adding-the-auth-screen)
  - [10.4. Adding User Signup](#104-adding-user-signup)
  - [10.5. Allowing Users to Log In](#105-allowing-users-to-log-in)
  - [10.6. Handling Authentication Errors](#106-handling-authentication-errors)
  - [10.7. Managing the Auth Token Locally (in the App)](#107-managing-the-auth-token-locally-in-the-app)
  - [10.8. Using the "ProxyProvider" and Attaching the Token to Outgoing HTTP Requests](#108-using-the-proxyprovider-and-attaching-the-token-to-outgoing-http-requests)
  - [10.9. Adding the Token to All Requests](#109-adding-the-token-to-all-requests)
  - [10.10. Connecting the "Favorite" Status to Users](#1010-connecting-the-favorite-status-to-users)
  - [10.11. Attaching Products to Users and Filtering By Creator](#1011-attaching-products-to-users-and-filtering-by-creator)
  - [10.12. Attaching Orders to Users](#1012-attaching-orders-to-users)
  - [10.13. Adding a Logout Functionality](#1013-adding-a-logout-functionality)
  - [10.14. Automatically Logging Users Out (After Some Time)](#1014-automatically-logging-users-out-after-some-time)
  - [10.15. Automatically Logging Users In](#1015-automatically-logging-users-in)
- [11. Adding Animations [SHOP APP]](#11-adding-animations-shop-app)
  - [11.1. Animation From Scratch (Completely Manually Controlled)](#111-animation-from-scratch-completely-manually-controlled)
  - [11.2. Using the "AnimatedBuilder" Widget](#112-using-the-animatedbuilder-widget)
  - [11.3. Working with the "AnimatedContainer"](#113-working-with-the-animatedcontainer)
  - [11.4. More Built-in Animation and Transition Widgets](#114-more-built-in-animation-and-transition-widgets)
  - [11.5. Fading Loaded Images In (And Showing a Placeholder)](#115-fading-loaded-images-in-and-showing-a-placeholder)
  - [11.6. Adding a "Hero" Transition](#116-adding-a-hero-transition)
  - [11.7. Working with Silvers](#117-working-with-silvers)
  - [11.8. Practice: Animating Order Boxes](#118-practice-animating-order-boxes)
  - [11.9. Implementing Custom Route Transitions](#119-implementing-custom-route-transitions)
- [12. Using Native Devices Features (Camera, Maps, Location, ...) [GREAT PLACES APP]](#12-using-native-devices-features-camera-maps-location--great-places-app)
  - [12.1. Planning the App](#121-planning-the-app)
  - [12.2. PlaceList and Place Provider Setup](#122-placelist-and-place-provider-setup)
  - [12.3. Adding the "Add Place" Screen and an Image Input](#123-adding-the-add-place-screen-and-an-image-input)
  - [12.4. Using Image Picker and the Device Camera](#124-using-image-picker-and-the-device-camera)
  - [12.5. Storing the Image on the Filesystem (on the Device)](#125-storing-the-image-on-the-filesystem-on-the-device)
  - [12.6. Managing Data and Images via the Provider Package](#126-managing-data-and-images-via-the-provider-package)
  - [12.7. Handling Errors](#127-handling-errors)
  - [12.8. Testing on Real Devices](#128-testing-on-real-devices)
  - [12.9. Preparing SQLite](#129-preparing-sqlite)
  - [12.10. Storing and Fetching Data with SQLite](#1210-storing-and-fetching-data-with-sqlite)
  - [12.11. Adding a Location Input and the "location" Package](#1211-adding-a-location-input-and-the-location-package)
  - [12.12. Fetching the User Coordinates](#1212-fetching-the-user-coordinates)
  - [12.13. Displaying a Static Map Snapshot](#1213-displaying-a-static-map-snapshot)
  - [12.14. Rendering a Dynamic Map (via Google Maps)](#1214-rendering-a-dynamic-map-via-google-maps)
  - [12.15. Allowing Users to Pick a Location on the Map](#1215-allowing-users-to-pick-a-location-on-the-map)
  - [12.16. Storing the Location in SQLite](#1216-storing-the-location-in-sqlite)
  - [12.17. Adding a "Place Detail" Screen and Opening the Map in "readonly" Mode](#1217-adding-a-place-detail-screen-and-opening-the-map-in-readonly-mode)
- [13. Firebase, Image Upload, Push Notification - Building a Chat App](#13-firebase-image-upload-push-notification---building-a-chat-app)
  - [13.1. What is Firebase?](#131-what-is-firebase)
  - [13.2. Creating a New App](#132-creating-a-new-app)
  - [13.3. Getting Started with Firebase](#133-getting-started-with-firebase)
  - [13.4. Getting Started with Flutter and the Firebase SDK](#134-getting-started-with-flutter-and-the-firebase-sdk)
  - [13.5. Rendering Stream Data with StreamBuilder](#135-rendering-stream-data-with-streambuilder)
  - [13.6. Adding Data](#136-adding-data)
  - [13.7. A Basic Authentication Screen](#137-a-basic-authentication-screen)
  - [13.8. Adding an App Theme](#138-adding-an-app-theme)
  - [13.9. Creating an Authentication Form](#139-creating-an-authentication-form)
  - [13.10. Connecting Auth Form and Auth Screen](#1310-connecting-auth-form-and-auth-screen)
  - [13.11. Implementing Authentication](#1311-implementing-authentication)
  - [13.12. Storing Extra User Data](#1312-storing-extra-user-data)
  - [13.13. Finishing Authentication and Logout](#1313-finishing-authentication-and-logout)
  - [13.14. Adding Firebase Security Rules](#1314-adding-firebase-security-rules)
  - [13.15. Listening to Chat Messages](#1315-listening-to-chat-messages)
  - [13.16. Sending and Ordering Chat Messages](#1316-sending-and-ordering-chat-messages)
  - [13.17. Creating a Basic Chat Bubble Widget](#1317-creating-a-basic-chat-bubble-widget)
  - [13.18. Improving the Chat Bubbles](#1318-improving-the-chat-bubbles)
  - [13.19. Testing on Multiple Devices](#1319-testing-on-multiple-devices)
  - [13.20. Displaying User Names](#1320-displaying-user-names)
  - [13.21. Adding an Image Picker](#1321-adding-an-image-picker)
  - [13.22. Preparing File Upload and Validating Images](#1322-preparing-file-upload-and-validating-images)
  - [13.23. Uploading Images](#1323-uploading-images)
  - [13.24. Improving Image Upload](#1324-improving-image-upload)
  - [13.25. Running on a Real iOS Device](#1325-running-on-a-real-ios-device)
  - [13.26. Displaying User Images](#1326-displaying-user-images)
  - [13.27. How Push Notification Work](#1327-how-push-notification-work)
  - [13.28. An Introduction to Firebase Cloud Messaging](#1328-an-introduction-to-firebase-cloud-messaging)
  - [13.29. Android and Push Notification](#1329-android-and-push-notification)
  - [13.30. iOS and Push Notification](#1330-ios-and-push-notification)
  - [13.31. Handling Push Notification](#1331-handling-push-notification)
  - [13.32. Getting Started with Firebase Cloud Functions](#1332-getting-started-with-firebase-cloud-functions)
  - [13.33. Setting a Firebase Trigger](#1333-setting-a-firebase-trigger)
  - [13.34. Sending Automated Push Notification](#1334-sending-automated-push-notification)
  - [13.35. Polishing and Wrap Up](#1335-polishing-and-wrap-up)
- [14. Running Native Swift, Object C, Java or Kotlin Code](#14-running-native-swift-object-c-java-or-kotlin-code)
  - [14.1. Sending a Method Call from Flutter](#141-sending-a-method-call-from-flutter)
  - [14.2. Running Android Code](#142-running-android-code)
  - [14.3. Running iOS Code](#143-running-ios-code)
- [15. Publishing to the App Stores](#15-publishing-to-the-app-stores)
  - [15.1. Preparing the Code](#151-preparing-the-code)
  - [15.2. Preparing the App Configuration](#152-preparing-the-app-configuration)
  - [15.3. Preparing Third-Party Services](#153-preparing-third-party-services)
  - [15.4. Adding Icons and Splash Screens](#154-adding-icons-and-splash-screens)
  - [15.5. Publishing Android Apps](#155-publishing-android-apps)
  - [15.6. Publishing iOS Apps](#156-publishing-ios-apps)

---

# 1. Flutter Basics [QUIZ APP]
## 1.1. Creating a New Project
## 1.2. An Overview of the Generated Files and Folders
## 1.3. Analyzing the Default App
## 1.4. Dart Basics
1. Dart is a typed language which is similar to C language syntax that has a `main` function to execute.
2. Dart has data types as the other programming languages.
   1. Text - `String`
   2. Number - `Integer`, `Float`, `Double`
3. In convention, functions in Dart are named in camelCase.
    ```dart
    double addNumbers(int num1, double num2) {
      return num1 + num2;
    }

    void main () {
      for(int i = 0; i < 10; i++) {
        print('hello ${i + 1}');
      }

      addNumbers(1, 2);
    }
    ```

## 1.5. More Dart Basics
1. We can use `var` key word to create a generic variable in Dart to take any types of value. 
2. Besides, we can use a specific type to indicate the type of value that the variable can take.
3. In addition, we don't need to assign any value to declare a variable.
    ```dart
    double addNumbers(int num1, double num2) {
      return num1 + num2;
    }

    void main () {
      double firstResult = addNumbers(1, 2.6);
      firstResult = addNumbers(1, 2);

      print(firstResult + 1);
      print('Hello!');
    }
    ```
4. `class` system is also available in Dart language. However, it doesn't require `new` keyword as in the other programming language.
5. If we print the instance of the class, it prints out that the object is an instance of the class.
    ```dart
    class Person {
      String: name;
      int age = 30;
    }

    void main () {
      var p1 = Person();
      var p2 = Person();
      print(p1);
      p2.name = 'Max';
      print(p1.name);
      print(p2.age);
    }
    ```

## 1.6. Building an App From Scratch
1. Flutter is all about widgets. Each widget is built upon the other widgets and finally becomes a widget tree.
2. For classes, we can only extend one class at a time.
3. We can use `import` keyword to use packages in the other files.
4. The main app class extends `StatelessWidget` from `package:flutter/material.dart` which is an app themed in material design (which also works on iOS).
5. The class requires `build` method which has a `context` in `Widget` type and returns `MaterialApp()` which is also from the package.
6. In this case, we use `home` widget and pass a `Text` widget.
    ```dart
    import 'package:flutter/material.dart';

    void main () {

    }

    class MyApp extends StatelessWidget {
      Widget build(BuildContext context) {
        return MaterialApp(home: Text('Hello!'));
      }
    }
    ```

## 1.7. Running the App on an Emulator
1. To initiate the app, we can use `runApp` from `package:flutter/material.dart`.
    ```dart
    import 'package:flutter/material.dart';

    void main () {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      Widget build(BuildContext context) {
        return MaterialApp(home: Text('Hello!'));
      }
    }
    ```

## 1.8. Class Constructors and Named Arguments
1. `constructor` is a method of a class which takes external arguments and assign to properties when creating an instance. 
2. The `constructor` function is basically repeating the class name with given arguments with types.
3. Besides, we can use w/n `this` keyword to indicate the variable level of the object. It would be variable in the constructor or properties of the class.
4. We can wrap the arguments of constructor with curly braces to make them "**named**".
5. With named arguments, it doesn't matter the order of arguments passing to the function.
6. We can assign default value to the arguments.
7. We can add `@require` in Flutter to indicate if the argument is required.
8. Note that `@require` doesn't work in Dart itself!
9. In addition, we can use shorthand with `this` to assign argument values to properties directly. Note that we don't need to specify the type as the property has had already.
    ```dart
    class Person {
      String name;
      int age;

      Person({@require String inputName, @require int age = 30}) {
        name = inputName;
        this.age = age;
      }
    }

    void main() {
      var p1 = Person(inputName: 'Max', age: 30)
      var p2 = Person(age: 31, inputName: 'Manu');
    }

    class Car {
      String model;
      int maxSpeed;

      Car({ @required this.model, this.maxSpeed = 100 })
    }
    ```

## 1.9. First Summary and Additional Syntax
1. Besides regular syntax, we can use arrow function-like syntax to call the main function.
2. The shorthand function syntax is either `() =>` which returns a value directly or `() {}` as a regular function without a name.
    ```dart
    import 'package:flutter/material.dart';
    void main => runApp(MyApp());
    ```

## 1.10. Building a Widget Tree
1. We can use `Scaffold` for basic widgets. Besides, we can type <kbd>Ctrl + space</kbd> to check the list of available widgets from `package:flutter/material.dart`.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Text('This is my default text!'),
          ),
        );
      }
    }
    ```

## 1.11. Visible (Input/Output) and Invisible (Layout/Control) Widgets
## 1.12. Adding Layout Widgets
1. There are different types of widgets for visible and invisible widgets.
2. For example, we can use `Column` and `Row` for layout.
3. We can use `RaisedButton` though this component is deprecated. However, we can update in the setting to turn off warning for deprecated component.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      Widget build(BuildContext context) {
        var questions = [
          'What\'s your favorite color?',
          'What\'s your faviorite animal?'
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Text('The question!'),
                RaisedButton(
                  child: Text('Answer 1'),
                  onPressed: null,
                ),
                RaisedButton(
                  child: Text('Answer 2'),
                  onPressed: null,
                ),
                RaisedButton(
                  child: Text('Answer 3'),
                  onPressed: null,
                )
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.13. Connecting Functions and Buttons
1. In the best practice, functions of a widget should stay in the same class to keep the code isolated and clean.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      void answerQuestion() {
        print('Answer chosen!');
      }

      @override
      Widget build(BuildContext context) {
        var questions = [
          'What\'s your favorite color?',
          'What\'s your faviorite animal?'
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Text('The question!'),
                RaisedButton(
                  child: Text('Answer 1'),
                  onPressed: answerQuestion,
                ),
                RaisedButton(
                  child: Text('Answer 2'),
                  onPressed: null,
                ),
                RaisedButton(
                  child: Text('Answer 3'),
                  onPressed: null,
                )
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.14. Anonymous Functions
1. Besides a named function, we can use anonymous function.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      void answerQuestion() {
        print('Answer chosen!');
      }

      @override
      Widget build(BuildContext context) {
        var questions = [
          'What\'s your favorite color?',
          'What\'s your faviorite animal?'
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Text('The question!'),
                RaisedButton(
                  child: Text('Answer 1'),
                  onPressed: answerQuestion,
                ),
                RaisedButton(
                  child: Text('Answer 2'),
                  onPressed: () => print('Answer 2 chosen!'),
                ),
                RaisedButton(
                  child: Text('Answer 3'),
                  onPressed: () {
                    print('Answer 3 chosen');
                  },
                )
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.15. Updating Widget Data (Or: Using Stateless Widget Incorrectly)
1. To access element in a list (array), we can use either square brackets `[]` or `.elementAt` method.
2. We can have a variable as the property in the class to store values as the "state" of the app when users interacts with it. 
3. However, we are building the "stateless" widget app that the approach doesn't work right.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
      var questionIndex = 0;

      void answerQuestion() {
        questionIndex = questionIndex + 1;
        print(questionIndex);
      }

      @override
      Widget build(BuildContext context) {
        var questions = [
          'What\'s your favorite color?',
          'What\'s your faviorite animal?'
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Text(questions.elementAt(questionIndex)),
                RaisedButton(
                  child: Text('Answer 1'),
                  onPressed: answerQuestion,
                ),
                RaisedButton(
                  child: Text('Answer 2'),
                  onPressed: () => print('Answer 2 chosen!'),
                ),
                RaisedButton(
                  child: Text('Answer 3'),
                  onPressed: () {
                    print('Answer 3 chosen!');
                  },
                )
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.16. Updating Correctly with Stateful Widgets
1. The main difference between stateless and statefull widgets is that the UI gets re-rendered when "input data" (external data) changes in stateless app.
2. In stateful app, the UI re-renders when both "input data" and "local state" changes.
3. In VS Code, we can use `<kbg>Ctrl + Shift + r</kbd> to get refactor suggestions on a widget.
4. In this case, we create 2 classes `MyApp extends StatefulWidget` and `MyAppState extends State<MyApp>`.
    ```dart
    import 'package:flutter/material.dart';

    void main() {
      runApp(MyApp());
    }

    class MyApp extends StatefulWidget {
      @override
      State<StatefulWidget> createState() {
        // TODO: implement createState
        return MyAppState();
      }
    }

    class MyAppState extends State<MyApp> {
      var questionIndex = 0;

      void answerQuestion() {
        setState(() {
          questionIndex = questionIndex + 1;
        });
        print(questionIndex);
      }

      @override
      Widget build(BuildContext context) {
        var questions = [
          'What\'s your favorite color?',
          'What\'s your faviorite animal?'
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Text(questions.elementAt(questionIndex)),
                RaisedButton(
                  child: Text('Answer 1'),
                  onPressed: answerQuestion,
                ),
                RaisedButton(
                  child: Text('Answer 2'),
                  onPressed: () => print('Answer 2 chosen!'),
                ),
                RaisedButton(
                  child: Text('Answer 3'),
                  onPressed: () {
                    print('Answer 3 chosen!');
                  },
                )
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.17. A Brief Look Under The Hood
1. When the state changes, the instance runs `build` method again to re-render the screen. 
2. If we separate the widget into different components, the state will only affect where it is and improve the performance.

## 1.18. Using Private Properties
1. We can add an underscore `_` right before the class name to turn the class into private. [Dart - Libraries and visibility](https://dart.dev/guides/language/language-tour#libraries-and-visibility)

## 1.19. Creating a New, Custom Widget
1. We can extract code for different widgets as components and use `import` to use the widget in different widgets.
2. Every time the input from the parent widget changes, the widget re-builds, re-render, and update on the UI.
3. Though the current widget can only be updated from the external input from its parent and is stateless, the editor gives a warning as its property are still mutable. 
4. In this case, we can use `final` keyword to lock the variable and prevent from changing after it is initiated with the input.
    ```dart
    // lib/question.dart
    import 'package:flutter/material.dart';

    class Question extends StatelessWidget {
      final String questionText;

      Question(this.questionText);

      @override
      Widget build(BuildContext context) {
        return Text(questionText);
      }
    }
    ```

## 1.20. First Styling and Layouting Steps
1. To style widget, we can use `style: TextStyle()` and pass the styling to it. 
2. To center the text, we can pass `textAlign: TextAlign.center`.
3. However, this doesn't work directly as the widget doesn't take the full width on the screen. Therefore, the text is "centered" in its own container while not in its parent container.
4. In this case, we can give a `Container` and assign `width` with `double.infinity` which will take the full width of the screen.
5. Besides, we can assign `margin` to the widget.
6. The layout system in flutter is much similar to "box model" with `box-sizing: border-box` in HTML and CSS.
7. The full height and width of the widget is the widget with the margin.
8. To add margin, we can use `EdgeInsets` which has several methods such as `all`, `only`, and `fromLTRB`

```dart
// lib/question.dart
import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  final String questionText;

  Question(this.questionText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: Text(
        questionText,
        style: TextStyle(fontSize: 28),
        textAlign: TextAlign.center,
      ),
    );
  }
}
```

## 1.21. Enums and Multiple Constructors
1. A Dart class can have function constructor that takes arguments to create different variants.
2. Similar to Typescript, we can press <kbd>Ctrl</kbd> and click the class to check the definition.
3. For example, we call `EdgeInsets` with `all` method, which creates a `EdgeInsets` instance has all 4 sides setting in the same given value.
4. In the following example, we can create a class with a function constructor to create an instance with specific conditions.
5. By using `veryOld`, we can create a `Person` instance that always has `age` at 60.
    ```dart
    class Person {
      String name;
      Person({this.name, this.age = 30});

      Person.veryOld(this.name) {
        age = 60;
      }
    }
    ```

## 1.22. Offical Docs and the Widget Catalog
1. At [https://flutter.dev/](https://flutter.dev/), we can check the documentation and look into the [Widget catalog](https://docs.flutter.dev/development/ui/widgets).
2. For example, we can check out [layout](https://docs.flutter.dev/development/ui/widgets/layout).

## 1.23. Passing Callback Functions Around
```dart
import 'package:flutter/material.dart';
import './question.dart';
import './answer.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  var _questionIndex = 0;

  void _answerQuestion() {
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      'What\'s your favorite color?',
      'What\'s your faviorite animal?'
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My First App'),
        ),
        body: Column(
          children: <Widget>[
            Question(
              questions[_questionIndex],
            ),
            Answer(_answerQuestion),
            Answer(_answerQuestion),
            Answer(_answerQuestion),
          ],
        ),
      ),
    );
  }
}
```

## 1.24. Introducing Maps
1. In Dart, we can use curly braces to create `Maps` as key/value pairs, much similar to objects in Javascript or Dictionary in Python.
    ```dart
    var questions = [
      {
        'questionText': 'What\'s your favorite color?',
        'answers': ['Black', 'Red', 'Green', 'White']
      },
      {
        'questionText': 'What\'s your faviorite animal?',
        'answers': ['Rabbit', 'Snake', 'Elephant', 'Lion']
      },
      {
        'questionText': 'Who\'s your faviorite instructor?',
        'answers': ['Max', 'Max', 'Max', 'Max']
      },
    ];
    ```

## 1.25. Mapping Lists to Widgets
1. In this case, we update `Answer` widget to take one more argument to show the asnwer text as the options.
    ```dart
    // lib/answer.dart
    import 'package:flutter/material.dart';

    class Answer extends StatelessWidget {
      final Function selectHandler;
      final String answerText;

      Answer(this.selectHandler, this.answerText);

      @override
      Widget build(BuildContext context) {
        return Container(
            width: double.infinity,
            child: RaisedButton(
              color: Colors.blue,
              textColor: Colors.white,
              child: Text(answerText),
              onPressed: selectHandler,
            ));
      }
    }
    ```
2. We then revise the main app class to render a list of widgets (Answers).
3. We firstly update the following widgets after `Question`.
4. Note that Dart is very different from Javascript that the `List.map` method returns a lazy iterable which can't be evaluated as a list (array) directly.
5. In this case, we need to call `List.map.toList()` to turn the object back to a list for iteration.
6. Besides, Dart doesn't know if `questions[_questionIndex]['answers']` is a list. Therefore, we can add `as List<String>` to indicate the value is a list of string. This is much similar to Typescript.
7. We then can use spread syntax `...` to destructure the list to individual widget.
    ```dart
    import 'package:flutter/material.dart';
    import './question.dart';
    import './answer.dart';

    void main() => runApp(MyApp());

    class MyApp extends StatefulWidget {
      @override
      State<StatefulWidget> createState() {
        // TODO: implement createState
        return _MyAppState();
      }
    }

    class _MyAppState extends State<MyApp> {
      var _questionIndex = 0;

      void _answerQuestion() {
        setState(() {
          _questionIndex = _questionIndex + 1;
        });
        print(_questionIndex);
      }

      @override
      Widget build(BuildContext context) {
        var questions = [
          {
            'questionText': 'What\'s your favorite color?',
            'answers': ['Black', 'Red', 'Green', 'White']
          },
          {
            'questionText': 'What\'s your faviorite animal?',
            'answers': ['Rabbit', 'Snake', 'Elephant', 'Lion']
          },
          {
            'questionText': 'Who\'s your faviorite instructor?',
            'answers': ['Max', 'Max', 'Max', 'Max']
          },
        ];
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: Text('My First App'),
            ),
            body: Column(
              children: <Widget>[
                Question(
                  questions[_questionIndex]['questionText'],
                ),
                ...(questions[_questionIndex]['answers'] as List<String>)
                    .map((answer) {
                  return Answer(_answerQuestion, answer);
                }).toList(),
              ],
            ),
          ),
        );
      }
    }
    ```

## 1.26. final vs const
## 1.27. Introducing "if" Statements
## 1.28. [DART DEEP DIVE] More on "if" Statements
## 1.29. [DART DEEP DIVE] The "null" Value
## 1.30. Outputting Widgets Conditionally
## 1.31. Splitting the App Into Widgets
## 1.32. Calculating a Total Score
## 1.33. Getters and "else-if"
## 1.34. resetting the Quiz



# 2. Running Apps on Different Devices and Debugging Apps
## 2.1. Running the App on a Real Android Device
## 2.2. Running the App on a Real iOS Emulator
## 2.3. Running the App on a Real iOS Device
## 2.4. Working with the Emulators/Using the Emulators
## 2.5. Understanding Error Messages and Fixing Errors
## 2.6. Using the Debugger
## 2.7. Getting Started with the Dart DevTools
## 2.8. Understanding the Repaint Rainbow
## 2.9. Wrapping up teh Dart DevTools



# 3. Widgets, Styling, Adding Logic - Building a Real App [PERSONAL EXPENSES APP]
## 3.1. An Overview of the Core Flutter Widgets
## 3.2. Planning the App 
## 3.3. Combinging Widgets
## 3.4. Understanding Column Alignment
## 3.5. Not a Widget: Adding a Transaction Model and Transaction Data
## 3.6. Mapping Data Into Widgets
## 3.7. Building a Custom List Item
## 3.8. Styling a Container
## 3.9. Styling Text
## 3.10. More Styling!
## 3.11. Containers vs Columns vs Rows
## 3.12. Using String Interpolation
## 3.13. Installing External Packages and Formatting Dates
## 3.14. Adding Text Input Widgets (TextField)
## 3.15. Fetching User Input
## 3.16. Splitting the App Into Widgets
## 3.17. Connecting Widgets and Managing Data/State
## 3.18. Adding User Transaction to the List
## 3.19. Making the List Scrollable!
## 3.20. Working with ListViews
## 3.21. Further Input and Output Styling and Configuration
## 3.22. Adding AppBar Buttons and Floating Action Buttons
## 3.23. Showing a Modal Bottom Sheet
## 3.24. Improving and Styling the Modal Bottom Sheet
## 3.25. Configuring and Using Themes
## 3.26. Custom Fonts and Working with Text Themes
## 3.27. Adding Images to the App
## 3.28. Planning the Chart Widget
## 3.29. Looping Through Lists
## 3.30. Deriving Recent Transactions
## 3.31. Creating Bars for our Chart
## 3.32. Populating the Chart with Values
## 3.33. Finishing the Chart Bars
## 3.34. Flexible and Expanded: Deep Dive
## 3.35. Adding a ListTile Widget
## 3.36. Improving the Overall Chart
## 3.37. Widgets and Configuring Widgets - Summary/Overview
## 3.38. Getting Started with Date Selection
## 3.39. Showing a DatePicker
## 3.40. Adding Transaction with a Date
## 3.41. Deleting Transaction and Using IconButtons
## 3.42. Final Polishing!



# 4. Responsive and Adaptive User Interfaces and Apps
## 4.1. What does "Responsive" and "Adaptive" Mean?
## 4.2. Examples: Where we could improve the App!
## 4.3. Calculating Sizes Dynamically
## 4.4. Using the LayoutBuilder Widget
## 4.5. Controlling the Device Orientation
## 4.6. Rendering Alternative Landscape Content - 1
## 4.7. Finishing Landscape Mode
## 4.8. Showing Different Content Based on Device Orientation
## 4.9. Respecting the Softkeyboard Insets
## 4.10. Using the Device Size in Conditions
## 4.11. Managing the MediaQuery Object
## 4.12. Checking the Device Platform
## 4.13. Using Cupertino (iOS) Widgets
## 4.14. Using the SafeArea
## 4.15. More Cupertino Styles
## 4.16. Using Cupertino Buttons
## 4.17. Creating Custom Adaptive Widgets



# 5. Widget and Flutter Internals - Deep Dive
## 5.1. The Problem At Hand
## 5.2. Widget Tree and Element Tree - What, Why and How?
## 5.3. How Flutter Rebuilds and Repaint the Screen
## 5.4. How Flutter Executes build()
## 5.5. Using "cosnt" Widgets and Constructors
## 5.6. Writing Good Code
## 5.7. Extracting Widgets
## 5.8. Using Builder Methods
## 5.9. Understanding the Widget Lifecycle
## 5.10. Understanding the App Lifecycle
## 5.11. Understanding Context
## 5.12. A Problem with Lists and Stateful Widgets
## 5.13. Understanding the Problem Root
## 5.14. Using Keys



# 6. Navigation and Multiple Screens [MEALS APP]
## 6.1. Planning the App
## 6.2. Starting with the App - Adding Base Data
## 6.3. Creating a Grid and Working with Linear Gradients
## 6.4. Registering a Screen as the Main Screen
## 6.5. Styling and Theming
## 6.6. Naviagating to a New Page
## 6.7. Passing Data via the Constructor
## 6.8. Using Named Routes and Passing Data with Named Routes
## 6.9. Diving Deeper into Named Routes
## 6.10. Adding a Meal Model and Data
## 6.11. Selecting Meals for a Chosen Category
## 6.12. Displaying Recipe Items and Using Network Images
## 6.13. Finishing the Meal List Item
## 6.14. Navigating to the Meal Detail Page
## 6.15. onGenerateRoute and onUnknownRoute
## 6.16. Finishing the Meal Detail Page
## 6.17. Adding a TabBar to the Appbar
## 6.18. Adding a Bottom TabBar
## 6.19. Adding a Custom Drawer
## 6.20. Adding Links to the Drawer
## 6.21. Replacing Pages (Instead of Pushing)
## 6.22. Popping Pages and Passing Data Back
## 6.23. Adding Filter Switches
## 6.24. Adding Filter Logic
## 6.25. Adding a "Mark as Favorite" Feature
## 6.26. A Problem!



# 7. State Management [SHOP APP]
## 7.1. Planning the App
## 7.2. Defining a Data Model
## 7.3. Working on the "Products" Grid and Item Widgets
## 7.4. Styling and Theming the App
## 7.5. Adding Navigation to the App
## 7.6. Why State Management? And what is "State" and "State Management"?
## 7.7. Understanding the "Provider" Package and Approach
## 7.8. Working with Providers and Listeners
## 7.9. [DART DEEP DIVE] Inheritance ("extends") vs Mixins ("with")
## 7.10. Listening in Different Places and Ways
## 7.11. Using Nested Models and Providers
## 7.12. Exploring Alternative Provider Syntaxes
## 7.13. Using "Consumer" instead of "Proivder.of"
## 7.14. Local State vs App-wide State
## 7.15. Adding Shopping Cart Data
## 7.16. Working with Multiple Providers
## 7.17. Connecting the Cart Provider
## 7.18. Working on the Shopping Cart and Displaying a Total
## 7.19. Displaying a List of Cart Items
## 7.20. Making Cart Items Dismissible
## 7.21. Adding Product Detail Data
## 7.22. Providing an Orders Object
## 7.23. Adding Orders
## 7.24. Addnig an Orders Screen
## 7.25. Using a Side Drawer
## 7.26. Making Orders Expandable and Stateful Widgets vs Providers



# 8. Working with User Input and Forms [SHOP APP]
## 8.1. Snackbars and Undoing "Add to Cart" Actions
## 8.2. Showing Alert Dialogs
## 8.3. Adding a "Manage Products" Page
## 8.4. "Edit Product" Screen and A Problem
## 8.5. Using Forms and Working with Form Inputs
## 8.6. Managing Form Input Focus
## 8.7. Multiline Inputs and Disposing Objects
## 8.8. Image Input and Image Preview
## 8.9. Submitting Forms
## 8.10. Validating User Input
## 8.11. Adding Validation to All Inputs
## 8.12. Saving New Products
## 8.13. Time to Update Products!
## 8.14. Allowing Users to Delete Products



# 9. Sending HTTP Requests [SHOP APP]
## 9.1. On-Device vs Web Storage
## 9.2. How to Connect Flutter to a Database
## 9.3. Preparing Our Backend
## 9.4. How to Send HTTP Requests
## 9.5. Sending POST Requests
## 9.6. Working with Futures in Dart
## 9.7. [DART DEEP DIVE] Futures and Async Code
## 9.8. Showing a Loading Indicator
## 9.9. Handling Errors Gracefully
## 9.10. Working with "async" and "await"
## 9.11. Fetching Data, iniStateand and "of(context)"
## 9.12. How to Transform Fetched Data
## 9.13. Implementing Pull-to-Refresh
## 9.14. Updating Data via PATCH Requests
## 9.15. Utilizing Optimistic Updating 
## 9.16. Creating Custom Exceptions and More Error Handling
## 9.17. A Challenge for You!
## 9.18. Updating the "Favorite" Status Optimistically
## 9.19. Storing Orders in the Web
## 9.20. Fetching Orders and Fixing an Issue
## 9.21. Using the "FutureBuilder" Widget and Improve the Code



# 10. Adding User Authentication [SHOP APP]
## 10.1. How Authentication Works
## 10.2. Prepare Backend
## 10.3. Adding the Auth Screen
## 10.4. Adding User Signup
## 10.5. Allowing Users to Log In
## 10.6. Handling Authentication Errors
## 10.7. Managing the Auth Token Locally (in the App)
## 10.8. Using the "ProxyProvider" and Attaching the Token to Outgoing HTTP Requests
## 10.9. Adding the Token to All Requests
## 10.10. Connecting the "Favorite" Status to Users
## 10.11. Attaching Products to Users and Filtering By Creator
## 10.12. Attaching Orders to Users
## 10.13. Adding a Logout Functionality
## 10.14. Automatically Logging Users Out (After Some Time)
## 10.15. Automatically Logging Users In



# 11. Adding Animations [SHOP APP]
## 11.1. Animation From Scratch (Completely Manually Controlled)
## 11.2. Using the "AnimatedBuilder" Widget
## 11.3. Working with the "AnimatedContainer"
## 11.4. More Built-in Animation and Transition Widgets
## 11.5. Fading Loaded Images In (And Showing a Placeholder)
## 11.6. Adding a "Hero" Transition
## 11.7. Working with Silvers
## 11.8. Practice: Animating Order Boxes
## 11.9. Implementing Custom Route Transitions



# 12. Using Native Devices Features (Camera, Maps, Location, ...) [GREAT PLACES APP]
## 12.1. Planning the App
## 12.2. PlaceList and Place Provider Setup
## 12.3. Adding the "Add Place" Screen and an Image Input
## 12.4. Using Image Picker and the Device Camera
## 12.5. Storing the Image on the Filesystem (on the Device)
## 12.6. Managing Data and Images via the Provider Package
## 12.7. Handling Errors
## 12.8. Testing on Real Devices
## 12.9. Preparing SQLite
## 12.10. Storing and Fetching Data with SQLite
## 12.11. Adding a Location Input and the "location" Package
## 12.12. Fetching the User Coordinates
## 12.13. Displaying a Static Map Snapshot
## 12.14. Rendering a Dynamic Map (via Google Maps)
## 12.15. Allowing Users to Pick a Location on the Map
## 12.16. Storing the Location in SQLite
## 12.17. Adding a "Place Detail" Screen and Opening the Map in "readonly" Mode



# 13. Firebase, Image Upload, Push Notification - Building a Chat App
## 13.1. What is Firebase?
## 13.2. Creating a New App
## 13.3. Getting Started with Firebase
## 13.4. Getting Started with Flutter and the Firebase SDK
## 13.5. Rendering Stream Data with StreamBuilder
## 13.6. Adding Data
## 13.7. A Basic Authentication Screen
## 13.8. Adding an App Theme 
## 13.9. Creating an Authentication Form
## 13.10. Connecting Auth Form and Auth Screen
## 13.11. Implementing Authentication
## 13.12. Storing Extra User Data
## 13.13. Finishing Authentication and Logout
## 13.14. Adding Firebase Security Rules
## 13.15. Listening to Chat Messages
## 13.16. Sending and Ordering Chat Messages
## 13.17. Creating a Basic Chat Bubble Widget
## 13.18. Improving the Chat Bubbles
## 13.19. Testing on Multiple Devices
## 13.20. Displaying User Names
## 13.21. Adding an Image Picker
## 13.22. Preparing File Upload and Validating Images
## 13.23. Uploading Images
## 13.24. Improving Image Upload 
## 13.25. Running on a Real iOS Device
## 13.26. Displaying User Images
## 13.27. How Push Notification Work
## 13.28. An Introduction to Firebase Cloud Messaging
## 13.29. Android and Push Notification
## 13.30. iOS and Push Notification
## 13.31. Handling Push Notification
## 13.32. Getting Started with Firebase Cloud Functions
## 13.33. Setting a Firebase Trigger
## 13.34. Sending Automated Push Notification
## 13.35. Polishing and Wrap Up



# 14. Running Native Swift, Object C, Java or Kotlin Code
## 14.1. Sending a Method Call from Flutter
## 14.2. Running Android Code
## 14.3. Running iOS Code



# 15. Publishing to the App Stores
## 15.1. Preparing the Code
## 15.2. Preparing the App Configuration
## 15.3. Preparing Third-Party Services
## 15.4. Adding Icons and Splash Screens
## 15.5. Publishing Android Apps
## 15.6. Publishing iOS Apps