import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function List({ lowrp, retailMargin }) {

    var difference_in_margin;

    function checkForMarginDifference(retailMargin, margin) {
        let diff = retailMargin - margin;
        if (diff > 1) {
            return redstyle
        } else {
            return null;
        }
    }

    const redstyle = {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '20px'
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Mrp</TableCell>
                        <TableCell align="right">Retail Margin</TableCell>
                        <TableCell align="center">Actual Retail Margin</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lowrp.map((row) => (
                        <TableRow
                            key={row.rndid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.pname}
                            </TableCell>
                            <TableCell align="right">{row.mrp}</TableCell>
                            <TableCell align="right">{row.retmargin}</TableCell>
                            <TableCell style={checkForMarginDifference(retailMargin(row.mrp, row.billprice), row.retmargin)}
                                align="center">

                                {retailMargin(row.mrp, row.billprice)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
