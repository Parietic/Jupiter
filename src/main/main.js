const fs = require("fs");
const path = require("path");

const { Client, Intents } = require("discord.js");
const { app, dialog } = require("electron");

const { token } = require("../token.json");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	// eslint-disable-line global-require
	app.quit();
}

///////////////
//  Globals  //
///////////////

global._appWindow = undefined;
global._client = undefined;

////////////////
// Functions  //
////////////////

function initEventHandler(emitter, dir) {
	const eventFiles = fs
		.readdirSync(path.join(__dirname, dir))
		.filter((file) => file.endsWith(".js"));

	for (const file of eventFiles) {
		const event = require(dir + file);
		if (event.once) {
			emitter.once(event.name, (...args) => event.execute(...args));
		} else {
			emitter.on(event.name, (...args) => event.execute(...args));
		}
	}
}

///////////////
//  Discord  //
///////////////

// Initialize new client
_client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Event handler
initEventHandler(_client, "./clientEvents/");

// Attempt to login the client
_client.login(token).catch((err) => {
	console.log(
		dialog.showErrorBox("Discord bot failed to login", err.message)
	);
	app.quit();
});

///////////
//  App  //
///////////

// Event handler
initEventHandler(app, "./appEvents/");
