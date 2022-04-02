let guildList = {};
let guildChannelList = {};

///////////////
//  Sidebar  //
///////////////

// For each channel in a selected guild,
// Populate #channelScroll with a button
const loadChannels = async (guildId) => {
	guildChannelList = await window.clientApi.getGuildChannelList(guildId);

	const channelScroll = document.getElementById("channelScroll");

	for (const id in guildChannelList) {
		const button = document.createElement("button");

		button.id = id;
		button.textContent = guildChannelList[id].name;

		button.addEventListener("click", (event) =>
			window.clientApi.joinVoiceChannel(event.target.id).then(() => {
				const children = event.target.parentNode.childNodes;

				for (const child of children) {
					child.disabled = false;
				}

				event.target.disabled = true;
			})
		);

		channelScroll.append(button);
	}

	return Promise.resolve();
};

// Populate #guildSelect with a option for each guild the bot is in
const initSidebar = async () => {
	guildList = await window.clientApi.getGuildList();

	const numGuilds = Object.keys(guildList).length;

	const guildSelect = document.getElementById("guildSelect");
	const placeholder = guildSelect.firstElementChild;

	if (numGuilds > 1) {
		// Bot is in multiple guilds,
		// Hence, iterate for each guild then add each one as an option to the select element
		for (const id in guildList) {
			const option = document.createElement("option");

			option.text = guildList[id].name;
			option.value = id;

			guildSelect.add(option);
		}

		// After a selection has been made we populate #channelsScroll with buttons per channel
		guildSelect.addEventListener("change", (event) => {
			// Since the user can change guilds after initial selection,
			// We remove any existing channels from the last event signal
			const channelScroll = document.getElementById("channelScroll");
			while (channelScroll.firstChild) {
				channelScroll.removeChild(channelScroll.firstChild);
			}

			loadChannels(event.target.value);
		});
	} else if (numGuilds == 1) {
		// Bot is only in one guild
		// Therefor we can auto select said guild and populate channel buttons
		guildSelect.disabled = true;

		placeholder.value = Object.keys(guildList)[0];
		placeholder.text = guildList[placeholder.value].name;

		loadChannels(placeholder.value);
	} else {
		// Bot not in any guilds, or an error occurred
		// In either case we change the select element to let the user know the bot has not been invited to any guilds
		guildSelect.disabled = true;

		placeholder.textContent = "Please invite bot guild";
	}

	return Promise.resolve();
};
initSidebar();
