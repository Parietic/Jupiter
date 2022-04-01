const { ipcRenderer, contextBridge } = require("electron");

const CLIENT_API = {
	getGuildList: async () => ipcRenderer.invoke("getGuildList"),
	getGuildChannelList: async (guildId) =>
		ipcRenderer.invoke("getGuildChannelList", guildId),
};

contextBridge.exposeInMainWorld("clientApi", CLIENT_API);
