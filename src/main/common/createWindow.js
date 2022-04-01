const path = require("path");
const { BrowserWindow } = require("electron");

module.exports = () => {
	// Create the browser window.
	_appWindow = new BrowserWindow({
		width: 800,
		height: 600,
	});

	// and load the index.html of the app.
	_appWindow.loadFile(path.join(__dirname, "../../render/index.html"));

	// Open the DevTools.
	//_appWindow.webContents.openDevTools();
};
