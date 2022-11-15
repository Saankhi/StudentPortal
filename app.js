const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const studentRoutes = require('./routes/student')
const courseRoutes = require('./routes/course')
const { appendFile } = require('fs')



mongoose.connect('mongodb+srv://SaankhyaKatari:SaankhyaKatari27@mongodb-practice.xhgwvkd.mongodb.net/shop?retryWrites=true&w=majority')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.use('/student' , studentRoutes)
app.use('/course' , courseRoutes)










module.exports = app