import * as mongoose from "mongoose";
import { ObjectId } from "mongoose";
import { ICurrency } from "../interface/currency";

let Schema = mongoose.Schema;

let CurrencySchema = new Schema(
  {
    _id: { type: String },
    currency: { type: String },
    status: { type: String },
    price: { type: String },
    circulating_supply: { type: String },
    max_supply: { type: String },
    name: { type: String },
    logo: { type: String },
    logo_url: { type: String },
    market_cap: { type: String },
    market_cap_dominance: { type: String },
    rank: { type: String }
  },
  { collection: "currency", typeKey: "$type" }
);

export default mongoose.model("Currency", CurrencySchema);