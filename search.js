server.add('cw',function(args){
	var s = this.argv.join(' ');
	var query = db.querySync("SELECT *, MATCH(body) AGAINST(?) as score FROM `smf_messages` WHERE MATCH(body) AGAINST(?)", [s,s])[0];
	if(query)
		this.server.send("PRIVMSG "+this.channel.name+" :[\x0310search\x0F] "+query.subject+" by "+query.poster_name+" http://codewalr.us/"+query.id_topic+"/"+query.id_msg+" (Score: "+query.score+")");
	else
		this.server.send("PRIVMSG "+this.channel.name+" :[\x0310search\x0F] No post found.");
},'Searches the forum database')
