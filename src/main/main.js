const fs = require("fs");
const path = require("path");

const { Client, Intents } = require("discord.js");
const { app, dialog, ipcMain } = require("electron");

const initEventHandler = require("./common/initEventHandler");
const { token } = require("../token.json");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	// eslint-disable-line global-require
	app.quit();
}

///////////////
//  Globals  //
///////////////

global.APP_WINDOW = undefined;
global.CLIENT = undefined;

///////////////
//  Discord  //
///////////////

// Initialize new client
const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES);

CLIENT = new Client({ intents });

// Event handler
initEventHandler(CLIENT, "../clientEvents/");

// Attempt to login the client
CLIENT.login(token).catch((err) => {
	console.log(
		dialog.showErrorBox("Discord bot failed to login", err.message)
	);
	app.quit();
});

///////////
//  App  //
///////////

// Event handler
initEventHandler(app, "../appEvents/");
