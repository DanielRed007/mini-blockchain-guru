import * as mongoose from "mongoose";
import { IUser } from "../interface/user";

let Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IUser>("User", UserSchema);