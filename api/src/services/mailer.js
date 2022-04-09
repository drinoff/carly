const mailjet = require("node-mailjet").connect("0bee7d65c3418ff8960d2c64f99b2464", "4d2771943c1f2ebd9efd57ad56bc4eb9");

const EMAIL = "drinoff@gmail.com";

const mailer = (data) => {
	//console.log(data);

	if (!data.email || !data.name || !data.message) {
		return { statusCode: 422, body: JSON.stringify("Name, email, and message are required.") };
	}

	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: EMAIL,
					Name: data.email,
				},
				To: [
					{
						Email: EMAIL,
						Name: "Drinoff",
					},
				],
				Subject: data.name,
				TextPart: data.message,
			},
		],
	});
	return request
		.then((result) => {
			return {
				statusCode: 200,
				body: JSON.stringify(result.body),
			};
		})
		.catch((err) => {
			return {
				statusCode: 500,
				body: JSON.stringify(err.statusCode),
			};
		});
};

module.exports = mailer;
