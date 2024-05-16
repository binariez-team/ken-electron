const {
    app,
    BrowserWindow,
    ipcMain,
    dialog,
    Menu,
    shell
} = require('electron')


// Menu
const template = require('./menu');
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

const path = require('path')

// electron context menu
contextMenu = require('electron-context-menu');
contextMenu({
    showSaveImageAs: false,
    showSearchWithGoogle: false,
    showInspectElement: false,
    showSelectAll: false,
    showCopyImage: false
});


// Check if electron is in development mode to enable Node.js on release mode
var node;
const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = Number.parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
const isDev = isEnvSet ? getFromEnv : !app.isPackaged;
if (!isDev) {
    // require server
    const server = require('../server');
    node = server.listen(3500, () => console.log(`listening on port ${3500} ...`));
} 

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.maximize()
    win.show()

    const loadSystem = async function () {
        if (isDev) {
            win.loadURL('http://localhost:4200')
        } else {
            win.loadFile('app/index.html')
        }
    }

    loadSystem()

    win.webContents.on('did-fail-load', () => loadSystem());
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        if (!isDev) {
            node.close();
        }
        app.quit()
    }
})


let printWindow;
ipcMain.handle('print-invoice', async (event, data) => {
    // console.log(data);
    printWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    printWindow.loadFile('assets/print.html');
    printWindow.show();

    // const printOptions = {
    //     silent: true, // Print without showing a dialog (optional)
    //     marginsType: 0, // Set margin type (optional)
    //     // Other options as per documentation
    //   };
    printWindow.webContents.on('did-finish-load', async function () {
        await printWindow.webContents.send('printDocument', data);
        printWindow.webContents.print([], (success) => {
            // printWindow.close();
        });
    })
})