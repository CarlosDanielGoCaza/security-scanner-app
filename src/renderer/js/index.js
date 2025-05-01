const { ipcRenderer } = require('electron');

document.getElementById('login-card-acceder').addEventListener('click', () => {
  ipcRenderer.send('navigate', 'acceder'); // carga acceder.html
});
