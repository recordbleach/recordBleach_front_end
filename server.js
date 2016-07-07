<<<<<<< HEAD
const express = require('express')
const app = express()
const OKCupid = require('okcupidjs')	

const okc = new OKCupid()

okc.login("richards.justind@gmail.com","andbutso",()=>{
	okc.getQuickmatch((data)=>console.log(data))
})
=======
let bodyParser = require('body-parser')
let express = require('express')
let renderFile = require('ejs').renderFile
let app = express()
>>>>>>> 961c2a3ff39efa964964135475310caff76ded68

let theRoot = __dirname + '/dist/',
	PORT = process.env.PORT || 3000 

// got env port for heroku or elsewhere, else set to 3000 for dev
app.set('port', PORT)

app.set('views', './dist/views');
app.engine('html', renderFile)
app.set('view engine', 'html');

// serving images from dist/assets/
app.use( express.static( __dirname + '/dist/assets') );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded() );

app.post('/auth/register', function(req, res){
  console.log(req.body)
  res.redirect('/')
})

// get the root page
app.get('/', function (req, res) {
  res.render('index');
});

<<<<<<< HEAD
app.get('/okc', function(req,res){
	res.data = 'okc'
})

// serving static files from dist/
app.get('/:filename', function (req, res) {
  res.sendFile(theRoot + req.params.filename);
=======
//get the register page
app.get('/register', function (req, res) {
  res.render('register');
>>>>>>> 961c2a3ff39efa964964135475310caff76ded68
});




app.listen(PORT,function() {
	console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})