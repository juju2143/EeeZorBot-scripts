server.add('isup', function(args){
  var url = require("url");
  chan = this.channel.name;
  var opts = url.parse(this.argv[0]);

  if(opts.protocol == "https:")
  {
    var http = require("https");
    opts['rejectUnauthorized'] = false;
  }
  else
    var http = require("http");
  http.get(opts, function(res) {
    server.send("PRIVMSG "+chan+" :[\x0310isup\x0F] "+res.statusCode+": "+require("http").STATUS_CODES[res.statusCode]);
  });
}, 'Check if a website is up');
