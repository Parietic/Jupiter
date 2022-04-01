const { ipcRenderer, contextBridge } = require("electron");

const CLIENT_API = {
	getGuildList: async () => ipcRenderer.invoke("getGuildList"),
};

contextBridge.exposeInMainWorld("clientApi", CLIENT_API);
