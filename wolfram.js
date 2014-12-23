server.add('calc',function(args){
	var wolfram = require('wolfram').createClient(require("../etc/config.json").wolfram.appid);
	chan = this.channel;
	wolfram.query(this.argv.join(' '), function(err, result){
		if(err) {
			chan.send("[\x0310calc\x0F] Error: "+err);
			return null;
		}
		chan.send("[\x0310calc\x0F] "+result[1].subpods[0].value);
	});
},'Calculate stuff using Wolfram Alpha')
