import axios from "axios";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Currency from "../../schema/currency.model";

class CurrencyController{

    async getAllCurrencies(req:Request,res:Response){      
        try {
            const response = await axios.get(`${process.env.API_NOMICS_URI}/currencies/ticker?key=${process.env.API_NOMICS_KEY}&interval=1d&convert=USD&per-page=100&page=1`);
            const currencies = response.data;
            Currency.insertMany(currencies);
            res.json(currencies);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAllCurrencyInfo(req:Request,res:Response){      
        try {
            const response = await axios.get(`${process.env.API_NOMICS_URI}/currencies?key=${process.env.API_NOMICS_KEY}&ids=BTC,ETH,XRP&attributes=id,name,logo_url`);
            const currencies = response.data;
            res.json(currencies);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getCurrencies(req:Request,res:Response){
        try {
            const currencies = await Currency.find();
            if(!currencies){
                return res.status(404).json({message: "No currencies at the moment"});
            }

            res.status(200).json(currencies);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getCurrencyById(req:Request,res:Response){
        const currencyId = new ObjectId(req.params.id);

        try {
            const currency = await Currency.findOne({_id: currencyId});
            if(!currency){
                return res.status(404).json({message: "Currency not found"});
            }

            res.status(200).json(currency);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
}

export default new CurrencyController();