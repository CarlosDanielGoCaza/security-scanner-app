const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    fullscreenable: true,
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('../renderer/views/registrarusuario.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
