import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = async (id:string) => {
    return await jwt.sign({ user: id }, "just4now");
};

export const matchPassword = async (reqPassword:string, password:string) => {
    return await bcrypt.compare(reqPassword,password);
};
