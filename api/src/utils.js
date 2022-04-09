const fetch = require("node-fetch");
const url = `http://api.positionstack.com/v1/forward?access_key=c181b6d597a901caaf1245e3f87cd3bd&query=1600 Pennsylvania Ave NW, Washington DC`;
fetch(url).then((res) => {
	console.log(res.data);
});
