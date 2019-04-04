// variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const badTalk = require('./bad_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

// static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({
  extended: true
}))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const speech = badTalk(options)
  res.render('index', {
    speech: speech,
    options: options
  })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})