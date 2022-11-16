const express  = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')


const Course = require('../models/course')

router.post('/fillCourseDetails' , async (req,res) => {
    const course = new Course(req.body)
    try{
        const courseDetails = await course.save()
        res.status(201).json({
            CourseDetails: courseDetails
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.get('/getCoursesDetails' , async (req,res) => {
    try{
        const courseInfo = await Course.find()
        res.status(201).json({
            //count: courseInfo.length , 
            CoursesInfo: courseInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.get('/getCourseDetails/:_id' , async (req,res) => {
      const courseid = req.params._id
    try{
        const courseInfo = await Course .findById(courseid)
        res.status(201).json({ 
            CourseDetails: courseInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.patch('/updateCourseDetails/:_id' , async (req,res) => {
    const courseid = req.params._id
    const allowedUpdates = ['CourseName','CourseId','InstituteName','Address','CourseDuration']
    const updates = Object.keys(req.body)
    const updatesOps = {} 
    
    
    updates.forEach(arr => {
        if(!allowedUpdates.includes(arr))
        {
            res.status(400).json({
            message: "Invalid update request"
           })
           return
        }
        updatesOps[arr] = req.body[arr]
      })

     try{ 
        
        const courseInfo = await Course.updateOne({_id: courseid} , {$set : updatesOps})
      res.status(201).json({
        message: "Course data has been updated successfully",
        courseInfo
      })
  
  }catch(err){
      console.log(err)
      res.status(400).json({err})
  }
 
})

router.delete('/deleteCourse/:_id' , async (req,res) => {
    const courseid = req.params._id
  try{
      const courseInfo = await Course.deleteOne({courseid})
      res.status(201).json({ 
          message: 'Selected course has been deleted successfully', courseInfo
      })
  
  }catch(err){
      console.log(err)
      res.status(400).json({err})
  }
 
})




module.exports = router


