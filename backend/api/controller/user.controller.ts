import axios from "axios";
import { Request, Response } from "express";
import User from "../../schema/user.model";
import { generateToken, matchPassword } from "../../util/auth";

class UserController{

    async authenticateUser(req:Request,res:Response){
        const { email, password } = req.body;      
        try {
            const user = await User.findOne({ email });

            if (user && matchPassword(user.password, password)){
                res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user.id)
                })
            } else {
                res.status(401)
                throw new Error("Invalid Email or Password");
            }
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
    
}

export default new UserController();