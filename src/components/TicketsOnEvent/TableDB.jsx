import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';


const TableDB = ({ rows }) => {

  return (
    <TableContainer className='table__container'>
        <Table className='table' sx={{ maxWidth: '1400px'}} style={{fontSize: 10}} size='small' aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{p: 0.5}} align="right">id</TableCell>
              <TableCell sx={{p: 0.5}} align="right">event_id</TableCell>
              <TableCell sx={{p: 0.5}} align="right">event_date</TableCell>
              <TableCell sx={{p: 0.5}} align="right">adult_price</TableCell>
              <TableCell sx={{p: 0.5}} align="right">adult_quantity</TableCell>
              <TableCell sx={{p: 0.5}} align="right">kid_price</TableCell>
              <TableCell sx={{p: 0.5}} align="right">kid_quantity</TableCell>
              <TableCell sx={{p: 0.5}} align="right">benefit_price</TableCell>
              <TableCell sx={{p: 0.5}} align="right">benefit_quantity</TableCell>
              <TableCell sx={{p: 0.5}} align="right">group_price</TableCell>
              <TableCell sx={{p: 0.5}} align="right">group_quantity</TableCell>
              <TableCell sx={{p: 0.5}} align="right">barcode</TableCell>
              <TableCell sx={{p: 0.5}} align="right">tickets_barcode</TableCell>
              <TableCell sx={{p: 0.5}} align="right">user_id</TableCell>
              <TableCell sx={{p: 0.5}} align="right">equal_price</TableCell>
              <TableCell sx={{p: 0.5}} align="right">created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) =>
              <TableRow style={{verticalAlign: 'top'}} key={row.id}>
                <TableCell sx={{p: 0.5}} align="right">{row.id}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.event_id}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.event_date}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_adult_price}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_adult_quantity}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_kid_price}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_kid_quantity}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_benefit_price}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_benefit_quantity}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_group_price}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.ticket_group_quantity}</TableCell>
                <TableCell sx={{p: 0.5}} align='right'>{row.barcode}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.tickets_barcode.map((code) => <p key={code}>{code}</p>)}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.user_id}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.equal_price}</TableCell>
                <TableCell sx={{p: 0.5}} align="right">{row.created}</TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableDB;