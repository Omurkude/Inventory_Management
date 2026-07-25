const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema(


    {
        name : {
            type : String,
            required : true ,
            trim : true ,
        },

           email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
        },
    },
    {
        timestamps: true,
    }

        
    
)

const User =  mongoose.model("User" , userSchema)


module.exports = User