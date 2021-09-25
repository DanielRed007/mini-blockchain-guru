import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

export const matchPassword = async (reqPassword, password) => {
    return await bcrypt.compare(reqPassword,password);
};
