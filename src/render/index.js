let guildList = {};
let guildChannelList = [];
let currentGuild;

//////////////
//  Events  //
//////////////

const onChannelUpdate = (_event, channel) => {
	if (currentGuild != channel.guildId) {
		// Channel is not from the current selected guild
		return;
	}
	const button = document.getElementById(channel.id);

	if (!button) {
		// Create new button if one does not exist for the channel
		const channelScroll = document.getElementById("channelScroll");
		buildButton(channelScroll, channel);
	} else {
		// Refresh button name incase channel name was changed
		button.text = channel.name;

		// Enable/disable button based on join-ability and if the bot is connected or not
		if (!channel.joinable || channel.connected) {
			button.disabled = true;
		} else {
			button.disabled = false;
		}
	}
};

///////////////
//  Sidebar  //
///////////////

const buildButton = (channelScroll, channel) => {
	const button = document.createElement("button");

	button.id = channel.id;
	button.textContent = channel.name;

	if (!channel.joinable || channel.connected) {
		button.disabled = true;
	}

	// When button is pressed request bot to join the channel that the button represents
	button.addEventListener("click", (event) =>
		window.api.joinVoiceChannel(event.target.id)
	);

	channelScroll.append(button);
};

//////////////////////
//  Initialization  //
//////////////////////

// For each channel in a selected guild,
// Populate #channelScroll with a button
const loadChannels = async (guildId) => {
	guildChannelList = await window.api.getGuildChannelList(guildId);

	const channelScroll = document.getElementById("channelScroll");

	for (const channel of guildChannelList) {
		buildButton(channelScroll, channel);
	}

	return Promise.resolve();
};

// Populate #guildSelect with a option for each guild the bot is in
const initSidebar = async () => {
	guildList = await window.api.getGuildList();

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
			while (event.target.firstChild) {
				event.target.removeChild(event.target.firstChild);
			}

			currentGuild = event.target.value;
			loadChannels(event.target.value);
		});
	} else if (numGuilds == 1) {
		// Bot is only in one guild
		// Therefor we can auto select said guild and populate channel buttons
		guildSelect.disabled = true;

		placeholder.value = Object.keys(guildList)[0];
		placeholder.text = guildList[placeholder.value].name;

		currentGuild = placeholder.value;
		loadChannels(placeholder.value);
	} else {
		// Bot not in any guilds, or an error occurred
		// In either case we change the select element to let the user know the bot has not been invited to any guilds
		guildSelect.disabled = true;

		placeholder.textContent = "Please invite bot to a guild";
	}

	return Promise.resolve();
};
initSidebar();

const initEvents = () => {
	window.api.on_channelUpdate(onChannelUpdate);
};
initEvents();
