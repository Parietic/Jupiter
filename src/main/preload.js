const fs = require("fs");
const path = require("path");
const { ipcRenderer, contextBridge } = require("electron");

const API = {};

// Expose IPC events
let eventFiles = fs
	.readdirSync(path.join(__dirname, "./ipcEvents/"))
	.filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require("./ipcEvents/" + file);
	if (event.handler) {
		API[event.name] = async (...args) =>
			ipcRenderer.invoke(event.name, ...args);
	} else {
		API[event.name] = (...args) => ipcRenderer.send(event.name, ...args);
	}
}

// Init webContents event handles
eventFiles = fs
	.readdirSync(path.join(__dirname, "./webContentsEvents/"))
	.filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require("./webContentsEvents/" + file);
	if (event.once) {
		API["once_" + event.name] = (callback) =>
			ipcRenderer.once(event.name, callback);
	} else {
		API["on_" + event.name] = (callback) =>
			ipcRenderer.on(event.name, callback);
	}
}

contextBridge.exposeInMainWorld("api", API);
