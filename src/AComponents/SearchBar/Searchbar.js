import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'


export default function Searchbar({ getBatches, title }) {

    const [invoice, setInvoice] = useState(null);

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                placeholder={title}
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setInvoice(e.target.value)}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <SearchIcon className='pointer' onClick={() => getBatches(invoice)}></SearchIcon>
        </Paper>

    );
}
