const path = require("path");
const { BrowserWindow } = require("electron");

module.exports = () => {
	// Create the browser window.
	_appWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		show: false,
		autoHideMenuBar: true,
		webPreferences: {
			contextIsolation: true,
			//preload: "./preload.js",
		},
	});

	// Only show window when it has finished loading
	_appWindow.once("ready-to-show", () => {
		_appWindow.show();
	});

	// Load the index.html of the app.
	_appWindow.loadFile(path.join(__dirname, "../../render/index.html"));

	// Open the DevTools.
	//_appWindow.webContents.openDevTools();
};
