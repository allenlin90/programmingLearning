const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

const windowConfig = {
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    enableRemoteModule: false,
  },
};

app.on('ready', () => {
  mainWindow = new BrowserWindow(windowConfig);
  mainWindow.loadURL(`file://${__dirname}/main.html`);
  mainWindow.on('closed', () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    ...windowConfig,
    width: 300,
    height: 200,
    title: 'Add New Todo',
  });

  addWindow.loadURL(`file://${__dirname}/add.html`);
  addWindow.on('close', () => (addWindow = null));
}

ipcMain.on('todo:add', (event, todo) => {
  mainWindow.webContents.send('todo:add', todo);
  addWindow.close();
});

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

if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'View',
    submenu: [
      { role: 'reload' },
      {
        label: 'Toggle Developer Tools',
        accelerator:
          process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
