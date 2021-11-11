const {BrowserWindow, Menu, app} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let displayWindow;

const template = [
  {
    label: 'Window',
    submenu: [
      {
        label: 'Apri Display',
        accelerator: 'CommandOrControl+D',
        click () {
          createDisplayWindow()
        }
      }
    ]
  }
];
const applicationMenu = Menu.buildFromTemplate(template);

const createMainWindow = () => {
  Menu.setApplicationMenu(applicationMenu);
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      nativeWindowOpen: true,
    }
  });
  /**
   * Controllo di versione
   */
  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (
    mainWindow = null
  ))
}
const createDisplayWindow = () => {
  displayWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      nativeWindowOpen: true,
    }
  });
  /**
   * Controllo di versione
   */
  displayWindow.loadURL(
    isDev ? "http://localhost:3000#display-panel" : `file://${path.join(__dirname, "../build/index.html#display-panel")}`
  );
  displayWindow.on("closed", () => (
    displayWindow = null
  ))
}

app.on("ready", createMainWindow)
app.on("ready", createDisplayWindow)
app.on("window-all-closed", () => {
  process.platform !== "darwin" && app.quit()
})
app.on("activate", () => {
  mainWindow === null && createMainWindow()
  displayWindow === null && createDisplayWindow()
})

