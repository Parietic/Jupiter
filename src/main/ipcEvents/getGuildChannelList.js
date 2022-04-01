module.exports = {
	name: "getGuildChannelList",
	handler: true,
	execute: async (event, guildId) => {
		const guild = await CLIENT.guilds.fetch(guildId);
		const channels = await guild.channels.fetch();

		const voiceChannels = {};

		channels.forEach((channel) => {
			if (channel.isVoice()) {
				voiceChannels[channel.id] = {
					name: channel.name,
					joinable: channel.joinable,
					parentId: channel.parentId,
					parentName: channel.parent.name,
				};
			}
		});

		return voiceChannels;
	},
};
