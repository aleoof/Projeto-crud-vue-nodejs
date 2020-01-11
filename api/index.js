const express = require('express');

const app = express()
const port = 3333;
const router = require('./routers/routes')
const bodyParser = require('body-parser')


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json())

app.use('/', router)

app.use(bodyParser.urlencoded({extended: true }))



app.listen(port, ()=> {
    console.log(`server is runing in http://localhost:${port}`)
})