const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        //required: true
    },

    Lastname: {
        type: String,
        //required: true
    },
    Gender: {
        type: String,
       // required: true
    },
    DOB: {
        type: Date,
      //  required: true
    },
    Email: {
        type: String,
       // required: true,
       // unique: true
    },
    Branch: {
        type: String ,
       // required: true
    },
    CollegeName: {
        type: String ,
       // required: true
    },
    Mobile: {
        type: Number,
       // required: true,
       // unique: true 
    },
    Image: {
        data: Buffer,
        contentType: String,
        
    }
        


})


module.exports = mongoose.model('Student' , studentSchema)
