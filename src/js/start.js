import { Program } from "./Program.js";
import { app } from 'electron';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var program = new Program(
    "Toolkit Labs",
    300, 500,
    false,
    'src/html/index.html',
    path.join(__dirname, '../../assets/logo.png')
);

app.whenReady().then(() => program.run());
app.on('window-all-closed', () => {
    program.quit();
});