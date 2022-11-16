const express  = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')


const Student = require('../models/student')

router.post('/addStudent' , async (req,res) => {
    const student = new Student(req.body)
    try{
        const stuInfo = await student.save()
        res.status(201).json({
            StudentInfo: stuInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.get('/getStudent' , async (req,res) => {
    try{
        const stuInfo = await Student.find()
        res.status(201).json({
            count: stuInfo.length , 
            StudentInfo: stuInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.get('/getStudent/:_id' , async (req,res) => {
      const studentid = req.params._id
    try{
        const stuInfo = await Student.findById(studentid)
        res.status(201).json({ 
            IndividualStudentInfo: stuInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.put('/updateStudent/:_id' , async (req,res) => {
    const studentid = req.params._id
    const allowedUpdates = ['Firstname','Lastname','Email','Mobile']
    const updates = Object.keys(req.body)
    const updatesOps = {}

    updates.forEach(arr => {
        if(!allowedUpdates.includes(arr)){
            res.status(400).json({
                message: "Invalid Update Request",
            })
            return
        }
          updatesOps[arr] = req.body[arr]
    })
    
    
  try{
      const stuInfo = await Student.updateOne({id: studentid} , {$set : updatesOps})
      res.status(201).json({ 
          message: "Student data has been updated successfully" ,
          stuInfo
      })
  
  }catch(err){
      console.log(err)
      res.status(400).json({err})
  }
 
})

router.delete('/deleteStudent/:_id' , async (req,res) => {
    const studentid = req.params._id
  try{
      const stuInfo = await Student.deleteOne({studentid})
      res.status(201).json({ 
          message: 'Student Data has been deleted successfully', stuInfo
      })
  
  }catch(err){
      console.log(err)
      res.status(400).json({err})
  }
 
})




module.exports = router


