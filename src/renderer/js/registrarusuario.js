const { ipcRenderer } = require('electron');

document.getElementById('boton-rojo').addEventListener('click', () => {
    ipcRenderer.send('navigate', 'index'); // Asumiendo que el archivo se llama index.html
});