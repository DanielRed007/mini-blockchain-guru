import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuruInvertedTable } from "../../../shared/GuruInvertedTable/GuruInvertedTable";
import { getCryptoCurrencyList } from "../../../state/actions/cryptoCurrencyActions";

export const HomeLiveTable: React.FC = () => {
    const dispatch = useDispatch();
    const cryptoCurrency = useSelector((state:any) => state.cryptocurrency);
    const { list } = cryptoCurrency;

    const CryptoHeaders = [
        "Currency",
        "Name",
        "Logo",
        "Status",
        "Price",
        "Supply",
        "Max Supply",
        "Market Cap",
        "Dominance",
        "Rank"
    ];

    useEffect(() => {
        dispatch(getCryptoCurrencyList("crypto"));
    },[dispatch]);

    return (
        <div style={{padding: "50px 0", margin: "0 auto"}}>
            <GuruInvertedTable headers={CryptoHeaders} data={list} />
        </div>
    )
}
