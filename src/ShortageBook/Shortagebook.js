import React, { Fragment } from 'react'
import Shortagelist from './Shortagelist'
import Searchbar from '../AComponents/SearchBar/Searchbar'


const searchbar_style = {
    backgroundColor: '#334257',
    padding: '30px',
    display: 'flex'
}

const searchbarCode = {
    width: '10%',
}


export default function Shortagebook() {
    return (
        <Fragment>

            <div style={searchbar_style}>
                <div style={searchbarCode}>
                    <Searchbar title={'Code'} ></Searchbar>
                </div>
                <Searchbar title={'Search By Product'} buttonname={'Add icon'}></Searchbar>
            </div>

            <Shortagelist></Shortagelist>
        </Fragment>
    )
}
