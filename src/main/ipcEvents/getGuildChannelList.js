const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
	name: "getGuildChannelList",
	handler: true,
	execute: async (_event, guildId) => {
		const guild = await CLIENT.guilds.fetch(guildId);
		const channels = await guild.channels.fetch();

		const voiceChannels = [];

		channels.forEach((channel) => {
			if (channel.isVoice()) {
				voiceChannels.push({
					id: channel.id,
					name: channel.name,
					joinable: channel.joinable,
					connected: channel.members.has(CLIENT.user.id),
					parentId: channel.parentId,
					parentName: channel.parent.name,
				});
			}
		});

		return voiceChannels;
	},
};
