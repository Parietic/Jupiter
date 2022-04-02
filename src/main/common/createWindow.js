const path = require("path");
const { BrowserWindow } = require("electron");

module.exports = () => {
	// Create the browser window.
	APP_WINDOW = new BrowserWindow({
		width: 1280,
		height: 720,
		show: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			enableRemoteModule: false,
			preload: path.join(__dirname, "../preload.js"),
		},
	});

	// Only show window when it has finished loading
	APP_WINDOW.once("ready-to-show", () => {
		APP_WINDOW.show();

		// Open the DevTools.
		APP_WINDOW.webContents.openDevTools();
	});

	// Load the index.html of the app.
	APP_WINDOW.loadFile(path.join(__dirname, "../../render/index.html"));
};
