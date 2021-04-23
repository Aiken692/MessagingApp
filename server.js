var express = require('express')
var bodyParser = require('body-parser')
 var  cors = require('cors')

 var app = express()

app.use(cors())
app.use(express.static(__dirname))
app.use(bodyParser.json())

var messages = [
    {name: 'Walter', message: 'Hi'},
    {name: 'Barry', message: 'Heyyo'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (res, req) => {
    // messages.push(req.body)
    console.log(req.body)
    
})


var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
});