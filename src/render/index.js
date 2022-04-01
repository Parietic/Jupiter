window.clientApi.getGuildList().then((result) => {
	console.log(result);
	for (const id in result) {
		window.clientApi
			.getGuildChannelList(id)
			.then((result) => console.log(result));
	}
});
