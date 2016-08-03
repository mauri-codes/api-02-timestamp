var express = require("express");

var app = express();
var os = require('os');
var parser = require('ua-parser-js');
var requestIp = require("request-ip");


app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
	var ip = requestIp.getClientIp(req);
	var ua = parser(req.headers['user-agent']).ua;
	var ini = ua.indexOf("(");
	var fin = ua.indexOf(")")-ini;
	var subs = ua.substr(ini+1, fin);
	var lan = req.headers["accept-language"].split(";");
	var rel = os.release().split(".");
	var ops = subs;
	res.json({"ipaddress": ip, "language": lan[0], "software": ops});
});

app.listen(app.get("port"), function(){
	console.log("App started on port 3000");
});