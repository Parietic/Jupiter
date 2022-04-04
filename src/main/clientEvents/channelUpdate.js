const {
	execute: channelUpdate,
} = require("../webContentsEvents/channelUpdate.js");

module.exports = {
	name: "channelUpdate",
	execute: (_oldChannel, newChannel) => {
		// If channel is not a guild voice channel return
		if (newChannel.type != "GUILD_VOICE") {
			return;
		}

		channelUpdate(newChannel);
	},
};
