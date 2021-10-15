import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = async (id:string) => {
    return await jwt.sign({ user: id }, "just4now");
};

export const matchPassword = (reqPassword:string, password:string) => {
    return bcrypt.compare(reqPassword,password);
};
