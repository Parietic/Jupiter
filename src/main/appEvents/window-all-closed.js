const { app } = require("electron");

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.

module.exports = {
	name: "window-all-closed",
	execute: () => {
		if (process.platform !== "darwin") {
			app.quit();
		} else {
			_appWindow = undefined;
		}
	},
};
