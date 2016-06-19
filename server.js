const express = require('express');
const app = express();

const theRoot = __dirname + '/dist/',
	PORT = process.env.PORT || 3000

console.log(process.env.PORT)

app.set('port', PORT)

app.get('/', function (req, res) {
  res.sendFile(theRoot + 'index.html');
});

app.get('/:filename', function (req, res) {
  res.sendFile(theRoot + req.params.filename);
});

app.listen(PORT,function() {
	console.log('\n===== now... listening for requests on port ' + PORT + ' =====\n')
})