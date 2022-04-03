module.exports = {
	name: "will-quit",
	once: true,
	execute: () => {
		CLIENT.destroy();
	},
};
