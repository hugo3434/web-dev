if(process.env.NODE_ENV !== 'prodution'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') //tell server the directory of the router

app.set('view-engine', 'ejs') // set templating language https://expressjs.com/en/guide/using-template-engines.html
app.set('views', __dirname + '/views') //set views directory
app.set('layouts', 'layouts/layout') //set layouts directory
app.use(expressLayouts) //use expressLayouts
app.use(express.static('public')) //serve images, CSS files, and JavaScript files in a directory named public.

const mongoose = require('mongoose') //import mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
}) //connect to mongoose
const db = mongoose.connection
db.on('error', err => {
    console.error(err)
}) //check error
db.once('open', () => console.log('Connected to mongoose')) //check successful

app.use('/', indexRouter) //first argu is directory, second argu is name of the router

app.listen(process.env.PORT || 3000) //Binds and listens for connections on the specified host and port.
