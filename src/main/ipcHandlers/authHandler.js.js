const { ipcMain } = require('electron');

ipcMain.on('login', (event, credentials) => {
    console.log("Usuario intentando iniciar sesión:", credentials);
    event.reply('login-response', { success: true, message: "Inicio de sesión exitoso" });
});
