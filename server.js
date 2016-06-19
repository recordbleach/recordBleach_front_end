const express = require('express');
const app = express();

const theRoot = __dirname + '/dist/',
	PORT = 3000

app.get('/', function (req, res) {
  res.sendFile(theRoot + 'index.html');
});

app.get('/:filename', function (req, res) {
  res.sendFile(theRoot + req.params.filename);
});

app.listen(PORT,function() {
	console.log('\n===== listening for requests on port ' + PORT + ' =====\n')
})