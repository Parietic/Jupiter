const {
	execute: channelUpdate,
} = require("../webContentsEvents/channelUpdate.js");

module.exports = {
	name: "voiceStateUpdate",
	execute: (oldState, newState) => {
		if (newState.channelId == oldState.channelId) {
			// Channel remained the same, therefor we can rule out joinable status changing
			return;
		}

		// User either moved, disconnected or joined channel
		if (!oldState.channelId) {
			// User joined a channel
			channelUpdate(newState.channel);
		} else if (!newState.channelId) {
			// User disconnected from a channel
			channelUpdate(oldState.channel);
		} else {
			// User moved channel
			channelUpdate(oldState.channel);
			channelUpdate(newState.channel);
		}
	},
};
