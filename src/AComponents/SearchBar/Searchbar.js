import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'


export default function Searchbar({ getBatches, title, buttonname, getLowrp }) {

    const [invoice, setInvoice] = useState(null);

    function handleKeyPress(e) {
        console.log(e.key)

        if (e.key === 'Enter') {
            console.log('Enter key is pressed')
            getBatches(invoice)
        }

        if (e.key === 'Alt' && e.key === 's') {
            console.log('Alt + s pressed')
        }
    }

    function onButtonEntered(e) {
        console.log('onbuttonentered', e.key)
        if (e.key === 'Enter') {

            e.preventDefault()
            getBatches(invoice)
            getLowrp(invoice)
        }
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                placeholder={title}
                inputProps={{ 'aria-label': 'searchbar' }}
                // onKeyPress={(e) => handleKeyPress(e)}
                onKeyDown={function (e) { handleKeyPress(e); onButtonEntered(e) }}
                onChange={(e) => setInvoice(e.target.value)}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            {
                buttonname == 'Add icon' ?
                    <FaPlus className='pointer' style={{ width: '10%' }}></FaPlus>
                    :
                    <SearchIcon className='pointer' onClick={function () { getBatches(invoice); getLowrp(invoice) }}></SearchIcon>
            }

        </Paper>

    );
}
