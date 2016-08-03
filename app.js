var express = require("express");

var app = express();
var os = require('os');

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
	var ip = req.ip;
	var lan = req.headers["accept-language"].split(";");
	var rel = os.release().split(".");
	var ops = os.type() + " " + rel[0] + "." + rel[1] + "; " + os.arch();
	res.json({"ipaddress": ip, "language": lan[0], "software": ops});
});

app.listen(app.get("port"), function(){
	console.log("App started on port 3000");
});