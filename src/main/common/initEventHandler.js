const fs = require("fs");
const path = require("path");

module.exports = (emitter, dir) => {
	const eventFiles = fs
		.readdirSync(path.join(__dirname, dir))
		.filter((file) => file.endsWith(".js"));

	for (const file of eventFiles) {
		const event = require(dir + file);
		if (event.once) {
			emitter.once(event.name, (...args) => event.execute(...args));
		} else if (event.handler) {
			emitter.handle(event.name, (...args) => event.execute(...args));
		} else {
			emitter.on(event.name, (...args) => event.execute(...args));
		}
	}
};
