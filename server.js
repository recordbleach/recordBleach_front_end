const express = require('express')
const app = express()
const OKCupid = require('okcupidjs')	

const okc = new OKCupid()

okc.login("richards.justind@gmail.com","andbutso",()=>{
	okc.getQuickmatch((data)=>console.log(data))
})

const theRoot = __dirname + '/dist/',
	PORT = process.env.PORT || 3000 

// got env port for heroku or elsewhere, else set to 3000 for dev
app.set('port', PORT)

// get the page
app.get('/', function (req, res) {
  res.sendFile(theRoot + 'index.html');
});

app.get('/okc', function(req,res){
	res.data = 'okc'
})

// serving static files from dist/
app.get('/:filename', function (req, res) {
  res.sendFile(theRoot + req.params.filename);
});

// serving images from dist/images/
app.get('/images/:filename', function (req, res) {
  res.sendFile(theRoot + 'images/' + req.params.filename);
});

app.listen(PORT,function() {
	console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})