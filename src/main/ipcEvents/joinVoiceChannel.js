const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
	name: "joinVoiceChannel",
	handler: true,
	execute: async (event, channelId) => {
		const channel = await CLIENT.channels.fetch(channelId);

		joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
		});

		return Promise.resolve();
	},
};
