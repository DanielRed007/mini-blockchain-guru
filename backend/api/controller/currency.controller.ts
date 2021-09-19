import axios from "axios";
import { Request, Response } from "express";

class CurrencyController{

    async getAllCurrencies(req:Request,res:Response){      
        try {
            const response = await axios.get(`${process.env.API_NOMICS_URI}/currencies/ticker?key=${process.env.API_NOMICS_KEY}&interval=1d&convert=USD&per-page=10&page=1`);
            const currencies = response.data;
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
    
}

export default new CurrencyController();