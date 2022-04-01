module.exports = {
	name: "getGuildList",
	handler: true,
	execute: async () => {
		const guilds = await CLIENT.guilds.fetch();
		const guildList = {};

		guilds.forEach((guild) => {
			guildList[guild.id] = {
				name: guild.name,
				icon: guild.icon,
			};
		});

		return guildList;
	},
};
