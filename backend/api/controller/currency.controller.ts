import axios from "axios";

class CurrencyController{

    async getAllCurrencies(req:any,res:any){       
        try {
            // curl "https://api.nomics.com/v1/currencies/sparkline?key=your-key-here&ids=BTC,ETH,XRP&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z"
            axios
                .get(`https://api.nomics.com/v1/currencies/sparkline?key${process.env.API_NOMICS_KEY}`)
                .then((response:any) => {
                    console.log(response);
                });
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}

export default new CurrencyController();