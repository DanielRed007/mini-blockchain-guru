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
    pricedate: { type: String },
    price_timestamp: { type: String },
    symbol: { type: String },
    circulating_supply: { type: String },
    max_supply: { type: String },
    name: { type: String },
    logo: { type: String },
    logo_url: { type: String },
    market_cap: { type: String },
    market_cap_dominance: { type: String },
    transparent_market_cap: { type: String },
    num_exchanges: { type: String },
    num_pairs: { type: String },
    num_pairs_unmapped: { type: String },
    first_candle: { type: String },
    first_trade: { type: String },
    first_order_book: { type: String },
    first_priced_at: { type: String },
    rank: { type: String },
    rank_delta: { type: String },
    high: { type: String },
    high_timestamp: { type: String },
  },
  { collection: "currency", typeKey: "$type" }
);

export default mongoose.model("Currency", CurrencySchema);