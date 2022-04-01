const { BrowserWindow } = require("electron");
const createWindow = require("../common/createWindow");

// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.

module.exports = {
	name: "activate",
	once: false,
	execute: () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	},
};
