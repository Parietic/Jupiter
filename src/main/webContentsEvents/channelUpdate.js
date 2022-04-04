module.exports = {
	name: "channelUpdate",
	execute: (channel) => {
		APP_WINDOW.webContents.send("channelUpdate", {
			id: channel.id,
			name: channel.name,
			connected: channel.members.has(CLIENT.user.id),
			joinable: channel.joinable,
			parentId: channel.parentId,
			parentName: channel.parent.name,
		});
	},
};
