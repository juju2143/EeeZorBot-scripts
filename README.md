Juju's EeeZorBot scripts
========================
Some custom scripts I wrote or gathered from the Internet for use with [EeeZorBot](https://github.com/Eeems/EeeZorBot/tree/re-org). Dump the files in the scripts/ directory and add them in etc/config.json. May require to install some packages from npm, namely ```cheerio```, ```google``` and ```wolfram```.

udp.js
------
Starts a UDP server on 127.0.0.1:33333, listens for IRC raw data and shoots them on the server you configured in config.json. Useful for sending data on IRC from webpages. Of course don't make it listen to 0.0.0.0.

title.js
--------
Posts the title of a webpage whenever someone posts the URL on a channel.

isup.js
-------
```
.isup <url>
```

Gets the HTTP error code of a URL.

search.js
---------
```
.cw <query>
```

Searches a MySQL database for *query*.

google.js
---------
```
.google <query>
```

Searches Google for *query*.

wolfram.js
----------
```
.calc <query>
```

Asks Wolfram Alpha about *query*. Needs an appID from the Wolfram Alpha website in the config.json.
