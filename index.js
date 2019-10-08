const express = require('express')
const app = express()
const port = 3000

app.post('/temperature', (req, res) => res.send('temperature is:', req.body.temp))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))