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
