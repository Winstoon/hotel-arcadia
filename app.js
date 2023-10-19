var express = require('express')
var path = require('path')
var app = express()
var PORT = 8080

app.use(express.static(path.join(__dirname, 'build')))

/** 静态文件 */
app.get('/*', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)
console.log('Service start at: http://localhost:' + PORT)