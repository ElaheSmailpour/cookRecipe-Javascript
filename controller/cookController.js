const koch = require("../model/cook");


exports.getKoch = (req, res) => {
	koch.find().then((erfolg) => {
		res.status(200).send(erfolg);
	}).catch((error) => {
		res.status(400).send(" get profile error " + error);
	});
}
