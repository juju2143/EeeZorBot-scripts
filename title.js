function getTitle(theurl, callback)
{
  var url = require("url");
  var util = require("util");
  var cheerio = require("cheerio");

  var opts = url.parse(theurl);

  if(opts.protocol == "https:")
  {
    var http = require("https");
    opts['rejectUnauthorized'] = false;
  }
  else
    var http = require("http");
  http.get(opts, function(res) {
    datas = "";
    res.on('data', function (chunk) {
      datas += chunk;
    });
    res.on('error', function (e) {
      console.log("stuff happened "+util.inspect(e))
    });
    res.on('end', function () {
      var $ = cheerio.load(datas);
      callback($('title').text());
    });
  });
}

function titleCallback(text){
  var res = text.match(/((htt(p|ps):\/\/)[^\s\x02\x03\x0f\x16\x1d\x1f]*)/ig);
  if(res)
  {
    chan = this.channel.name;
    for(i=0; i<res.length; i++)
    {
      getTitle(res[0], function(title){
        if(title != "")
          server.send("PRIVMSG "+chan+" :[\x0310title\x0F] "+title);
      });
    }
  }
}

server.on('message', titleCallback);
server.on('action', titleCallback);
