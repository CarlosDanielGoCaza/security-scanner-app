const path = require('path');
const { ipcMain } = require('electron');

function setupRouting(mainWindow) {
  ipcMain.on('navigate', (event, routeName) => {
    const viewPath = path.join(__dirname, '..', 'renderer', 'views', `${routeName}.html`);
    console.log("Cargando vista:", viewPath);
    mainWindow.loadFile(viewPath).catch(err => {
      console.error("Error al cargar la vista:", err);
    });
  });
}

module.exports = { setupRouting };
