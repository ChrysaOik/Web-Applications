const express = require('express')
const app = express()
const port = 3000
var favoritesList = new Map()

app.listen(port)

app.use('/', express.static('public'))
app.use(express.json())

app.get('/favourites', (req, res) => {
})

app.put('/favourites', (req, res) => { 
})

app.delete('/favourites', (req, res) => { 
})
