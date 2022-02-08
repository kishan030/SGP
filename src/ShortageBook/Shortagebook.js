import React, { Fragment } from 'react'
import Shortagelist from './Shortagelist'
import Searchbar from '../AComponents/SearchBar/Searchbar'

const searchbar_style = {
    backgroundColor: '#334257',
    padding: '30px',

}


export default function Shortagebook() {
    return (
        <Fragment>
            <div style={searchbar_style}>
                <Searchbar title={'Search For Product'}></Searchbar>
            </div>
            <Shortagelist></Shortagelist>
        </Fragment>
    )
}
