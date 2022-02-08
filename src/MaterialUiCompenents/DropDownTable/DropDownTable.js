import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Row(props) {
    // const { newbatch, oldbatch } = props;
    const { batch } = props;

    console.log("from Row component", batch)
    console.log("from row component new and old batch", batch.newBatch, batch.oldBatch)

    const [open, setOpen] = React.useState(false);


    return (
        <React.Fragment>
            {
                batch.newBatch.map((newbatchentity) => (

                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} key={newbatchentity.rndid}>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpen(!open)}

                            >
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>

                        <TableCell component="th" scope="row" >{newbatchentity.pname}</TableCell>
                        <TableCell align="center">{newbatchentity.batchno}</TableCell>
                        <TableCell align="center">{newbatchentity.mrp}</TableCell>
                    </TableRow>
                ))

            }

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Previous Product Invoice Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ProductName</TableCell>
                                        <TableCell align="center">BatchNo</TableCell>
                                        <TableCell align="center">Mrp</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {batch.oldBatch.map((historyRow) => (
                                        <TableRow key={historyRow.pname}>
                                            <TableCell align="center" component="th" scope="row">
                                                {historyRow.pname}
                                            </TableCell>
                                            <TableCell align="center">{historyRow.batchno}</TableCell>
                                            <TableCell align="center">{historyRow.mrp}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


function oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
}


export default function DropDownTable({ batches }) {

    var newBatch = new Array();
    var oldBatch = new Array();

    var seperatebatch = [
        seperateBatches(batches)
    ]

    function seperateBatches(batches) {
        for (let i = 0; i < batches.length; i++) {
            console.log("odd even", oddOrEven(i))
            if (oddOrEven(i) === "even") {
                newBatch.push(batches[i])
            } else {
                oldBatch.push(batches[i]);
            }
        }
        return {
            newBatch,
            oldBatch
        }

    }


    console.log("inside dropdown component", batches)
    console.log("inside dropdown component seperate batches", seperatebatch)


    return (
        < div >
            {console.log("inside dropdown component return batches", batches)}
            < TableContainer component={Paper} >
                <Table aria-label="collapsible table">
                    <TableHead sx={{ '& > *': { borderBottom: 'unset' }, width: '100 %' }}>

                        <TableCell />
                        <TableCell >Product Name</TableCell>
                        <TableCell align="center">Batch</TableCell>
                        <TableCell align="center">Mrp</TableCell>

                    </TableHead>
                    <TableBody>

                        {
                            seperatebatch.map((batch, index) => (

                                <Row key={index} batch={batch} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </div >
    );
}
