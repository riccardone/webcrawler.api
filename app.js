const express = require('express')
let fetch = require('node-fetch')
const port = 5000
let cors = require("cors")
let bodyParser = require("body-parser")
let GetUrls = require('get-urls')
let ParseDomain = require('parse-domain')    
let service = require('./crawlerService')(GetUrls, ParseDomain)

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/api/crawler', (req, res) => {
    fetch(req.body.url)
    .then(response => response.text())
    .then((doc) => {      
        res.setHeader('Content-Type', 'application/json')
        let links = service.getLinks(doc, req.body.url);
        console.log('Handled request to crawl "' + req.body.url + '" found "' + links.length + '" links ')
        res.send(JSON.stringify(links))
    }).catch(function(error) {
      console.log(error)
      res.send(500)
    })
})

app.listen(port, '0.0.0.0', () => console.log(`App listening on port ${port}!`))