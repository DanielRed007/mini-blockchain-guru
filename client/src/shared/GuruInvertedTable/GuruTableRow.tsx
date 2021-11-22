import React from "react";
import { Button, Table } from "semantic-ui-react";

export const GuruTableRow = (row:any,key: any) => {
    const guruRow = row.row;

    return (
        <Table.Row>
            <Table.Cell>{guruRow.currency}</Table.Cell>
            <Table.Cell>{guruRow.name}</Table.Cell>
            <Table.Cell>{guruRow.logo_url}</Table.Cell>
            <Table.Cell>{guruRow.status}</Table.Cell>
            <Table.Cell>{guruRow.price}</Table.Cell>
            <Table.Cell>{guruRow.circulating_supply}</Table.Cell>
            <Table.Cell>{guruRow.max_supply}</Table.Cell>
            <Table.Cell>{guruRow.market_cap}</Table.Cell>
            <Table.Cell>{guruRow.market_cap_dominance}</Table.Cell>
            <Table.Cell>{guruRow.rank}</Table.Cell>
        </Table.Row>
    )
};