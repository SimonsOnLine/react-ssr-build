const express = require('express')

const fs = require('fs')

const path = require('path')

const app = express()

const ReactDOMServer = require('react-dom/server')

const ServerApp = require('../../dist/ServerApp.js').default

let port = process.env.PORT || 3002

let AppString = ReactDOMServer.renderToString(ServerApp)

// console.log('AppString==',AppString)

let htmlTmp = fs.readFileSync(path.join(__dirname,'../../dist/index.html'),'utf8')

let newHtml = htmlTmp.replace('<!--app-->',AppString)
// console.log('newHtml==',newHtml)


app.use('/public',express.static(path.join(__dirname,'../../dist')))
app.get('/',(res,req) => {
    req.send(newHtml)
})
app.listen(port,() => console.log('server is on'+port))