const express = require('express')
const { path }  = require('node:path')
const fs = require('node:fs');
const app = express()
const PORT = 3000;

app.get('/', (_req, res) => {
    res.send('HELLO WORLD')
    res.end();
})

app.get('/stream-video', (req, res) => {
    fs.readStream(path(_dirname, '..', 'assets'))
})

app.listen(PORT, () => {
    console.log('listening to port :', PORT)
})