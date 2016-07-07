var req = require('request'),
	md5 = require('./src/scripts/md5.js'),
	api = require('marvel-api')



var marvel = api.createClient({
  	publicKey: '6db850068e5b3a41606c008a722a8728',
	privateKey: '85118b653b9bd3e5235cf333dbfbb7a7dab3d846'
})



marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
// md5 = md5.md5

// var d = new Date(),
// 	ts = d.getTime() + '',
// 	hash = md5(ts + '85118b653b9bd3e5235cf333dbfbb7a7dab3d846' + '6db850068e5b3a41606c008a722a8728')

// req.get(`http://gateway.marvel.com:80/v1/public/comics/11354?apikey=6db850068e5b3a41606c008a722a8728&ts=${ts}&hash=${hash}`).on('response',
// 	(data)=>console.log(data.toJSON()))