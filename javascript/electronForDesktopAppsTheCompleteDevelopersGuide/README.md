Start Date: 2022/04/01

- [1. Handling Electron Projects](#1-handling-electron-projects)
  - [1.1. Getting started](#11-getting-started)
  - [1.2. Starting and stoping electron](#12-starting-and-stoping-electron)
  - [1.3. Loading HTML Docs](#13-loading-html-docs)
  - [1.4. Selecting videos](#14-selecting-videos)
  - [1.5. Reading File Details](#15-reading-file-details)
  - [1.6. Introduction to FFMPEG](#16-introduction-to-ffmpeg)
  - [1.7. Require statements in the browser](#17-require-statements-in-the-browser)
  - [1.8. IPC communication](#18-ipc-communication)
  - [1.9. Video Duration with FFProbe](#19-video-duration-with-ffprobe)
  - [1.10. Receiving IPC Event](#110-receiving-ipc-event)
- [2. Handling Menu Bars](#2-handling-menu-bars)
  - [2.1. App overview](#21-app-overview)
  - [2.2. App Boilerplate](#22-app-boilerplate)
  - [2.3. Constructing Menu Bars](#23-constructing-menu-bars)
  - [2.4. Menu Bar Gotchas](#24-menu-bar-gotchas)
  - [2.5. On Menu Click Functionality](#25-on-menu-click-functionality)
  - [2.6. On Menu Click Functionality](#26-on-menu-click-functionality)
  - [2.7. Cross Platform Hotkeys](#27-cross-platform-hotkeys)
  - [2.8. Creating separate windows](#28-creating-separate-windows)

# 1. Handling Electron Projects
## 1.1. Getting started
1. We will install `electron` package which executes `index.js` with electron runtime which is similar to node.js runtime.
    ```js
    // index.js
    const electron = require('electron');
    ```

## 1.2. Starting and stoping electron
```js
// index.js
const electron = require('electron');
const { app } = electron;

app.on('ready', () => {
  console.log('App is now ready');
});
```

## 1.3. Loading HTML Docs
1. We can use `file` protocol to load HTML file. 
    ```js
    // index.js
    const electron = require('electron');
    const { app, BrowserWindow } = electron;

    app.on('ready', () => {
      const mainWindow = new BrowserWindow({});
      mainWindow.loadURL(`file://${__dirname}/index.html`);
    });
    ```
    ```html
    <!-- index.html -->
    <head></head>
    <body>
      <h1>Video Info</h1>
    </body>
    ```

## 1.4. Selecting videos
1. A web page can get details about files that a user purposefully feeds into it.
2. Electron can raed any arbitrary file off the machine at any time.
```html
<head></head>
<body>
  <h1>Video Info</h1>
  <form>
    <div>
      <label for="">Select a video</label>
      <input type="file" accept="video/*" name="" id="" />
    </div>
  </form>
</body>
```

## 1.5. Reading File Details
1. Since electron works as regular web app, we can use frontend Javascript to interact with HTML elements.
```html
<!-- index.html -->
<head></head>
<body>
  <h1>Video Info</h1>
  <form>
    <div>
      <label for="">Select a video</label>
      <input type="file" accept="video/*" name="" id="" />
    </div>
    <button type="submit">Get Info</button>
  </form>

  <script>
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();

      const [file] = document.querySelector('input').files;
    });
  </script>
</body>
```

## 1.6. Introduction to FFMPEG
1. `ffmpeg` is a CLI tool to work with video files.
2. `ffmpeg-fluent` is a wrapper that allow us to work with `ffmpeg` easier with Node.js.
3. We will use [`ffmpeg.ffprobe`](https://www.npmjs.com/package/fluent-ffmpeg#reading-video-metadata) to read video meta data

## 1.7. Require statements in the browser
1. User selects file
2. Feed file details to FFMPEG
3. FFMPEG reads video file duration
4. Show duration to user
5. Electron apps have 2 main parts - `Electron App` and `Web App`
   1. Electron specific configuration and logic
   2. Keep as generic as possible; increases possible reuse on plain web
6. Therefore, the web app may receive the video file from the user and send it to electron app to read the meta data.
7. Electron app then sends the meta data back to web app.
8. In electron apps, we can use CommonJS module to `require` modules from dependancies.
9. The web app served by electron app can access CommonJS module system and other built in modules such as `fs` and `crypto`.
10. In this case, we can use `ipcRender` method from `electron` module to allow communication between electron and web app.
    ```html
    <head></head>
    <body>
      <h1>Video Info</h1>
      <form>
        <div>
          <label for="">Select a video</label>
          <input type="file" accept="video/*" name="" id="" />
        </div>
        <button type="submit">Get Info</button>
      </form>

      <script>
        const electron = require('electron');
        const { ipcRender } = electron;

        document.querySelector('form').addEventListener('submit', (event) => {
          event.preventDefault();

          const [file] = document.querySelector('input').files;
        });
      </script>
    </body>
    ```

## 1.8. IPC communication
1. To send data from web app to electron, we can use `ipcRender` from `electron` module and give an event name.
2. On electron side, we can use `ipcMain` to catch the event and handle the passing argument.

## 1.9. Video Duration with FFProbe
1. When receiving an event from web app, we give a callback function which has an event argument that allows us to separate between tabs in the front electron app (as web tabs in the electron app shell).
2. Note that in Windows OS, we need to import the installed `ffprobe` app to use with `fluent-ffmpeg`
    ```js
    // index.js
    const electron = require('electron');
    const { app, BrowserWindow, ipcMain } = electron;
    const ffmpeg = require('fluent-ffmpeg');

    app.on('ready', () => {
      const mainWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: false,
        },
      });
      mainWindow.loadURL(`file://${__dirname}/index.html`);
    });

    ipcMain.on('video:submit', (event, path) => {
      // needs to import the ffmpeg app
      ffmpeg.setFfprobePath('c:\\ffmpeg\\bin\\ffprobe.exe');
      ffmpeg.ffprobe(path, (err, metadata) => {
        console.log(`Video duration is: ${metadata.format.duration}`);
      });
    });
    ```

## 1.10. Receiving IPC Event
1. To use `mainWindow` in multiple events, we can have a variable declared and use it.
2. We can use `mainWindow.webContents.send` to send data back to web front.
    ```js
    // index.js
    const electron = require('electron');
    const { app, BrowserWindow, ipcMain } = electron;
    const ffmpeg = require('fluent-ffmpeg');

    let mainWindow;

    app.on('ready', () => {
      mainWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: false,
        },
      });
      mainWindow.loadURL(`file://${__dirname}/index.html`);
    });

    ipcMain.on('video:submit', (event, path) => {
      ffmpeg.setFfprobePath('c:\\ffmpeg\\bin\\ffprobe.exe');
      ffmpeg.ffprobe(path, (err, metadata) => {
        mainWindow.webContents.send('video:metadata', metadata.format.duration);
      });
    });
    ```
3. On the web front, it's similar to handle the event as on Electron side.
    ```html
    <!-- index.html -->
    <head></head>
    <body>
      <h1>Video Info</h1>
      <form>
        <div>
          <label for="">Select a video</label>
          <input type="file" accept="video/*" name="" id="" />
        </div>
        <button type="submit">Get Info</button>
      </form>

      <h1 id="result"></h1>

      <script>
        const electron = require('electron');
        const { ipcRenderer } = electron;

        document.querySelector('form').addEventListener('submit', (event) => {
          event.preventDefault();
          const [{ path }] = document.querySelector('input').files;

          ipcRenderer.send('video:submit', path);
        });

        ipcRenderer.on('video:metadata', (event, duration) => {
          document.getElementById(
            'result'
          ).innerHTML = `Video is ${duration} seconds`;
        });
      </script>
    </body>
    ```

# 2. Handling Menu Bars
## 2.1. App overview
1. We will create file handle bar with some buttons and features.
2. When the user clicks on the button, it pops up another window to interact with the user.

## 2.2. App Boilerplate
```js
// index.js
const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);
});

ipcMain.on('', () => {});
```
```html
<!-- main.html -->
<head></head>
<body>
  <h1>My Todos</h1>
  <script></script>
</body>
```

## 2.3. Constructing Menu Bars
1. We use `Menu` from `electron` to create the menu from a template. 
2. The template object is an array takes an object which has "labels" as the buttons to select.
3. Each object is a "tab" on the top menu bar.
    ```js
    // index.js
    const electron = require('electron');
    const { app, BrowserWindow, Menu } = electron;

    let mainWindow;

    app.on('ready', () => {
      mainWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: false,
        },
      });
      mainWindow.loadURL(`file://${__dirname}/main.html`);

      const mainMenu = Menu.buildFromTemplate(menuTemplate);
      Menu.setApplicationMenu(mainMenu);
    });

    const menuTemplate = [
      {
        label: 'File',
      },
    ];
    ```

## 2.4. Menu Bar Gotchas
1. Using custome menus will not only change the menu lists on top navigation but unbind the shortcuts (key binds) that associated with the features.
2. However, if we work on OSX, the first menu label will be merged with the name of the app. 
3. This will be an area to notice when developing cross platform apps.

## 2.5. On Menu Click Functionality
1. As the rendering and settings in different OS (OSX and Windows) are different, we may have different UI and results on certain feature or components. 
2. To align the design and features, we can check the OS/platform running the app. 
3. In this case, we can check an environment variable in the Node.js runtime by checking `process.platform`.
```js
// index.js
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'MyFile',
    submenu: [
      {
        label: 'New Todo',
      },
      {
        label: 'Quit',
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
```

## 2.6. On Menu Click Functionality
1. This variable is `darwin` if it runs on a Mac, while it will be `win32` when running on Windows.
2. On menu items, we can assign `click` method and call `app.quit()` which will close the app when the user clicks on it.
```js
// index.js
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'MyFile',
    submenu: [
      {
        label: 'New Todo',
      },
      {
        label: 'Quit',
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
```

## 2.7. Cross Platform Hotkeys
1. There's different hotkeys on different platforms for the same or similar functions. 
2. To bind hotkeys to a label in the menu, we can use `accelerator` property.
3. Besides, we can check on `process.platform` to decide which command and hotkey to bind according to the platform.
```js
// index.js
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'MyFile',
    submenu: [
      {
        label: 'New Todo',
      },
      {
        label: 'Quit',
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
```

## 2.8. Creating separate windows
1. To create a new window, we can use `BrowserWindow` to create another instance.
2. In this case, the new window should be smaller than the main window. 
3. We can pass both `width` and `height` to create the browser instance which takes pixel values.
4. Note that `width` and `height` take `Number` values.
5. Besides, we can give it a `title` on the new window instance.
```js
// index.js
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo',
  });
}

const menuTemplate = [
  {
    label: 'MyFile',
    submenu: [
      {
        label: 'New Todo',
        click() {
          createAddWindow();
        },
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Alt+F4',
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
```
