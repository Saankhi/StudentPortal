const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    CourseName: {
        type: String,
        required: true
    },

    CourseId: {
        type: String,
        required: true,
        unique: true
    },
    WeeklyHours: {
        type: Number,
        required: true
    },
    FacultyAllocated: {
        type: Number,
        required: true
    },
    MaximumCapacity: {
        type: Number,
        required: true
    }
  
  
  /*  Branch: {
        type: String ,
        required: true
    },
    CollegeName: {
        type: String ,
        required: true
    },
    Mobile: {
        type: Number,
        required: true,
        unique: true 
    } */
        


})


module.exports = mongoose.model('Course' , courseSchema)