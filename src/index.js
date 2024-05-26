const {app, BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        icon: path.join(__dirname, '../assets/logo.png')
    })
    win.setMenuBarVisibility(false);
    win.setTitle("Toolkit Labs");
    win.loadFile('src/html/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());