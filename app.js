const express = require('express')
const mongoose = require('mongoose')

const url = require('mongodb://localhost/AlienDBex')

const app = express()
 
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',() =>{
    console.log('connected...')
})

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, function(){
    console.log('Server started')
})