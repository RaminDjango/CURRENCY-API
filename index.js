const express = require('express')
const cors = require('cors')
const urlPage = require('./routes/urlComunnicate')
require('dotenv').config()
const bodyParser = require("body-parser")
const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.set('view engine', 'ejs')

app.use(express.static('./public/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/', urlPage)






const port  = process.env.PORT || 5000;
const host  = process.env.HOST || 'localhost';
app.listen(port, host, () => {
    try{
        console.log(`http://${host}:${port}`)
    }catch(error){
        console.log('You have some error from RUNNING SERVER: ' + error)
    }
})