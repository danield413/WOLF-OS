/*
    @autor: Daniel Díaz
    @descripción: Este archivo contiene el código de electron para la aplicación de escritorio
*/

// Modulos de electron.js
const {
    app,
    BrowserWindow
} = require("electron");
const path = require("path");

// Creador de environent de la aplicacion
function createEnvironment() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    mainWindow.loadFile("./dist/index.html");
    mainWindow.setMenuBarVisibility(false);
}

// Este metodo se va a llamar cuando electron haya terminado
// la inicializacion y este listo para crear el entorno de la aplicacion
// algunas apis solo se pueden usar despues de que ocurra este evento
app.whenReady().then(() => {

    createEnvironment();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Sale cuando todas las ventanas esten cerradas, excepto en macOS. Alli, es comun
// para las aplicaciones y su barra de menu permanezcan activas hasta que el usuario salga
// explicitamente con Cmd + Q.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

//en este archivo se puede incluir el resto del codigo especifico del proceso principal de la aplicacion
//tambien se pueden poner en archivos separados y requerirlos aqui