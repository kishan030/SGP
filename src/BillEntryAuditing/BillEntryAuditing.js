import React, { useState, useEffect, Fragment } from 'react'
import DropDownTable from '../MaterialUiCompenents/DropDownTable/DropDownTable'
import Searchbar from '../AComponents/SearchBar/Searchbar'
import axios from 'axios';
import List from '../MaterialUiCompenents/List/List'
import LinearProgress from '@mui/material/LinearProgress';



export default function BillEntryAuditing() {

    var batchesarray = new Array();
    //lowrp=list of wrong retail percentage
    var lowrparray = new Array();
    const [batches, setbatches] = useState([])
    const [lowrp, setLowrp] = useState([])
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const loderStyle = {
        width: '100%',
    }

    async function getBatches(invoice) {
        setLoading(true)
        const response = await axios.get('http://localhost:8080/billauditing', {
            params: {
                invoice: invoice
            }
        })

        for (let i = 0; i < response.data.length; i++) {
            batchesarray.push(response.data[i])
        }

        setbatches(batchesarray);
        setLoading(false)

    }

    async function checkForDiscounts(invoice) {
        setLoading2(true)
        const response = await axios.get('http://localhost:8080/billauditing/checkfordiscount', {
            params: {
                invoice: invoice
            }
        })

        for (let i = 0; i < response.data.length; i++) {
            lowrparray.push(response.data[i])
        }
        setLowrp(lowrparray);
        setLoading2(false)
    }

    function retailMargin(mrp, billprice) {
        let difference = mrp - billprice;
        let finalresult = (difference / mrp) * 100;
        return finalresult;
    }

    return (
        <Fragment>

            <div style={{ backgroundColor: '#334257', padding: '30px' }}>
                <Searchbar getBatches={getBatches} getLowrp={checkForDiscounts} title={'Search For Invoice'} ></Searchbar>
            </div>

            {
                batches.length === 0 && lowrp.length === 0
                    ?
                    <h1></h1>
                    :

                    <div>{
                        loading ?
                            <div>
                                <h1>Possibility of wrong entry products</h1>
                                <LinearProgress sx={loderStyle} />
                            </div>
                            :
                            <div>
                                <h1>Possibility of wrong entry products</h1>
                                <DropDownTable batches={batches}></DropDownTable>
                            </div>
                    }

                        {
                            loading2 ?
                                <div>
                                    <h1>Differences In Retail Margin</h1>
                                    <LinearProgress sx={loderStyle} />
                                </div>
                                :
                                <div>
                                    <h1>Differences In Retail Margin</h1>
                                    <List lowrp={lowrp} retailMargin={retailMargin}></List>
                                </div>
                        }
                    </div>
            }
        </Fragment>
    )
}
