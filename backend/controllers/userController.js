import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config()
// register user
export const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
    
  
      if (!name || !email || !password ) {
          return res.status(400).json({ message: "Please enter all fields" });
        }

        if (!validator.isEmail(email)) {
          return res.status(400).json({ message: "Invalid email" });
        }
        
        const isEmailExisted = await userModel.findOne({ email });
        if (isEmailExisted) {
          return res.status(400).json({ message: "Email already exists" });
        }
        // hashing password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // , image: req.file.path
      const user = new userModel({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).json({
          message: "User created successfully",
          success: true,
          data: user,
        
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  //  login user
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
      }
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    //   jwt
      const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1d" });
    //   Cookies
      res.cookie('authToken', token, { httpOnly: true, maxAge: 3600000, secure: true, sameSite: 'strict' });


      res.status(200).json({
        message: "User logged in successfully",
        success: true,
        data: user,
        token: token,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
