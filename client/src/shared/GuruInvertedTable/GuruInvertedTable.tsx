import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { TableProps } from "./TableTypes";
import { GuruTableRow } from "./GuruTableRow";


export const GuruInvertedTable: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <Table inverted>
    <Table.Header>
      <Table.Row>
        {headers && headers.map((header:string, index: number) => (
          <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data && data.map((row:any,index:number) => (
        <GuruTableRow row={row} key={index} />
      ))}
    </Table.Body>
  </Table>
  )
};
