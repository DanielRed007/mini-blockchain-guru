import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../schema/user.model";
import { matchPassword, generateToken } from "../../util/auth";

class UserController{

    async authenticateUser(req:Request,res:Response){
        const { email, password } = req.body;      
        const user = await User.findOne({ email });

        if (user && matchPassword(user.password, password) && user.email === email){
            const token = jwt.sign({ user: user._id }, process.env.JWT as string);

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token
            });
        } else {
            res.status(401).json({error: "Verify your access data, Unauthorized Access."});
        };
    }

    async registerUser(req:Request,res: Response){
        const { name, email, password } = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({error: "User already exists"});
        }

        bcrypt.hash(password, 10, async (error, hash) => {
            if(error){
                return res.status(400).json(error);
            };

            const newUser = await User.create({ 
                name: name, 
                email: email, 
                password: hash 
            });

            const token = jwt.sign({ user: newUser._id }, process.env.JWT as string);
            
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: token,
            });
        });        
    }
    
}

export default new UserController();