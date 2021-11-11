import path from 'path';
const { contextBridge, ipcRenderer } = require('electron');

window.BrowserWindow = require('electron').BrowserWindow;

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
    openNewWindow: (url) => {
      var BrowserWindow = remote.BrowserWindow;
      var win = new BrowserWindow({
        width: 1024,
        height: 768,
        show: true,
        webPreferences: {
          nodeIntegration: false,
          webSecurity: true,
          allowEval: false,
          nativeWindowOpen: true,
          allowRunningInsecureContent: false,
          contextIsolation: true,
          enableRemoteModule: true,
          preload: path.join(__dirname, "preload.js")
        },
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'favicon.ico')
      });

      win.loadURL(url.format({
        pathname: path.join(__dirname, url, 'index.html'),
        protocol: 'file:',
        slashes: true,
      }));
    }
  },
});
