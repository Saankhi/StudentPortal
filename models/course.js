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
    InstituteName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    CourseDuration: {
        type: String,
        required: true
    },
    CourseURL: {
        type: String,
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