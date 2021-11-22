import { useState, useEffect } from 'react';
import axios from "axios";

export const useFetchData = () => {
    const [responseData,setResponse] = useState(null);

    useEffect(() => {
        const getData = async() => {
            const { data } = await axios.get("http://localhost:5000/api/currency/info/all");
            setResponse(data);
        }

        getData();
    },[responseData]);

    return // responseData;
};