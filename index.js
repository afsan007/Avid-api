import server from "./server";

server.listen(process.env.PORT, () => {
	console.clear();
	console.log(`[Avid-api]_server is running on port ${process.env.PORT}`);
});
