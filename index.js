const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const env = process.env.NODE_ENV || 'development'; 
  
// If development environment 
if (env === 'development') { 
    try { 
        require('electron-reloader')(module, { 
            debug: true, 
            watchRenderer: true
        }); 
    } catch (_) { console.log('Error'); }     
}

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.webContents.openDevTools({mode: "detach"});

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})