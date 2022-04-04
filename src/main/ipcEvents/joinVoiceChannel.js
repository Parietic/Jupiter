const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
	name: "joinVoiceChannel",
	execute: (_event, channelId) => {
		CLIENT.channels.fetch(channelId).then((channel) => {
			// Make sure channel is joinable, then request to join the channel
			if (channel.joinable) {
				joinVoiceChannel({
					channelId: channel.id,
					guildId: channel.guild.id,
					adapterCreator: channel.guild.voiceAdapterCreator,
				});
			}
		});
	},
};
