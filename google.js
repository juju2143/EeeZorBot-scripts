server.add('google',function(args){
	var google = require('google');
	chan = this.channel;
	server.log("Google: "+this.argv.join(' '));
	google(this.argv.join(' '), function(err, next, links){
		if(err) {
			chan.send("[\x0310google\x0F] Error: "+err);
		}
		chan.send("[\x0310google\x0F] "+links[0].title+" "+links[0].link);
		chan.send("[\x0310google\x0F] "+links[0].description);
	});
},'Searches Google')
