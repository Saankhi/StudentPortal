const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const app = express()

const studentRoutes = require('./routes/student')
const courseRoutes = require('./routes/course')




mongoose.connect('mongodb+srv://SaankhyaKatari:SaankhyaKatari27@mongodb-practice.xhgwvkd.mongodb.net/shop?retryWrites=true&w=majority')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use('/uploads' , express.static(path.join(__dirname, 'uploads')))


app.use('/student' , studentRoutes)
app.use('/course' , courseRoutes)










module.exports = app