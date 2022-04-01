const { fs } = require("fs");

const { ipcMain } = require("electron");

const createWindow = require("../common/createWindow");
const initEventHandler = require("../common/initEventHandler");

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

module.exports = {
	name: "ready",
	once: true,
	execute: () => {
		// ipc handlers
		initEventHandler(ipcMain, "../ipcEvents/");

		createWindow();
	},
};
