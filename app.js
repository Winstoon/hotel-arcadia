var fs = require('fs')
var path = require('path')
var express = require('express')
var dayjs = require('dayjs')
var app = express()
var PORT = process.env.PORT || 80

app.use(express.static(path.join(__dirname, 'build')))

function readJson (filename) {
    const filepath = path.join(__dirname, 'data', filename)
    return JSON.parse(fs.readFileSync(filepath, { encoding: 'utf-8' }))
}

function writeJson(filename, json) {
    const filepath = path.join(__dirname, 'data', filename)
    fs.writeFileSync(filepath, JSON.stringify(json))
}

// apis

app.post('/api/login', express.json(), (req, res) => {
    const { username, password } = req.body
    const accounts = readJson('accounts.json')

    if (accounts[username] === password) {
        res.json({ code: 0, message: 'success' })
    } else {
        res.json({ code: 500, message: '用户名或密码错误' })
    }
})

app.get('/api/getOrders', (req, res) => {
    // 获取订单列表
    var list = readJson('orders.json')
    res.json({ data: list.filter(item => typeof item.deleted === 'boolean' ? !item.deleted : true ) })
})

app.post('/api/addOrder', express.json(), (req, res) => {
    // 添加订单
    var newOrder = req.body
    var orders = readJson('orders.json')
    
    newOrder.id = orders.length + 1
    newOrder.addDate = new Date().getTime()
    newOrder.date = dayjs(newOrder.date).valueOf()
    newOrder.processed = false
    newOrder.deleted = false
    orders.push(newOrder)
    
    writeJson('orders.json', orders)
    res.json({ code: 0, message: 'success' })
})

app.post('/api/updateOrder', express.json(), (req, res) => {
    // 更新订单
    var order = req.body
    var orders = readJson('orders.json')

    orders = orders.map(item => {
        if (item.id === order.id) {
            return order
        }
        return item
    })

    writeJson('orders.json', orders)
    res.json({ code: 0, message: 'Update success.' })
})

app.post('/api/deleteOrder', express.json(), (req, res) => {
    var { oid } = req.body
    var orders = readJson('orders.json')

    orders = orders.map(item => {
        if (item.id === oid) {
            item.deleted = true
        }
        return item
    })

    writeJson('orders.json', orders)
    res.json({ code: 0, message: 'Delete success.' })
})


app.get('/api/getCalendar', (req, res) => {
    const calendar = readJson('calendar.json')
    res.json({ data: calendar })
})

app.post('/api/updateCalendar', express.json(), (req, res) => {
    const newDates = req.body

    writeJson('calendar.json', newDates)
    res.json({ code: 0, message: 'success' })
})

/** 静态文件 */
app.get('/*', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)
console.log('Service start at: http://localhost:' + PORT)
