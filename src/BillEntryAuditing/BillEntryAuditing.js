import React, { useState, useEffect } from 'react'
import DropDownTable from '../MaterialUiCompenents/DropDownTable/DropDownTable'
import Searchbar from '../AComponents/SearchBar/Searchbar'
import axios from 'axios';



export default function BillEntryAuditing() {


    var batchesarray = new Array();
    const [batches, setbatches] = useState([])

    // function setBatchesToState() {
    //     setbatches(batchesarray)
    // }

    async function getBatches(invoice) {
        const response = await axios.get('http://localhost:8080/billauditing', {
            params: {
                invoice: invoice
            }
        })


        for (let i = 0; i < response.data.length; i++) {
            batchesarray.push(response.data[i])
        }

        setbatches(batchesarray);

    }

    return (
        <div className=''>
            <div style={{ backgroundColor: '#334257', padding: '30px' }}>
                <Searchbar getBatches={getBatches} title={'Search For Invoice'} ></Searchbar>
            </div>

            {
                batches.length === 0 ?
                    <h1></h1>
                    :
                    <DropDownTable batches={batches}></DropDownTable>
            }

        </div>
    )
}
