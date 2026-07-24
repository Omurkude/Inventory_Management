const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { RegisterSchema, LoginSchema } = require("../validators/auth.validator");

const salt = 10 ;

const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        const token = generateToken(newUser._id);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}
module.exports = { registerUser };