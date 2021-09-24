const http = require('http');

http.createServer(function (req, res) {

  res.write('<html><head></head><body>');

  res.write('Welcome to the Test Web Application 09:41!'+'<br/>');

  res.write('===================================='+'<br/>');

  res.write('</body></html>');

  res.end();

}).listen(80, '0.0.0.0')
