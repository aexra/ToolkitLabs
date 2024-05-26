import { app, BrowserWindow } from 'electron';

export class Program {
    constructor(t, w, h, mv, mhp, ip) {
        this.title = t;
        this.width = w;
        this.height = h;
        this.menuVisible = mv;
        this.mainHtmlPath = mhp;
        this.iconPath = ip;
        this.window = null;
    }
    run() {
        this.window = new BrowserWindow({
            width: this.width,
            height: this.height,
            icon: this.iconPath,
            title: this.title,
            titlebarStyle: 'hidden',
            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        })
        this.window.setMenuBarVisibility(this.menuVisible);
        this.window.loadFile(this.mainHtmlPath);
    }
    quit() {
        app.quit();
    }
}