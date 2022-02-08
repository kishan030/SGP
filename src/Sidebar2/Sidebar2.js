import React, { Fragment } from 'react'
import './Sidebar2.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Sidebardata } from './Sidebardata2'
import { MdArrowDropDown } from 'react-icons/md';



const Dropdownicon = ({ menuitem }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <MdArrowDropDown
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="mt2"
            />

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        width: 200,
                        maxWidth: '100%',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 18,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                {
                    menuitem.map((element) => {
                        return (
                            <MenuItem onClick={function () { handleClose(); window.location.pathname = element.link }}>{element.menuitems}</MenuItem>
                        )
                    })
                }

            </Menu>
        </Fragment>
    )
}


export default function Sidebar2() {

    return (
        <div className="sidebar">
            <ul className="SidebarList">

                {Sidebardata.map((val, key) => {
                    return (
                        <Fragment key={key}>
                            <li
                                className="ListItems"
                            >
                                <div className="ListElements">{val.icon}</div>

                                <div
                                    onClick={() => window.location.pathname = val.link}
                                    className="ListElements"
                                >
                                    {val.title}
                                </div>

                                {val.dropdown ? <Dropdownicon menuitem={val.dropdownmenuproducts} /> : <p></p>}

                            </li>
                        </Fragment>
                    )
                })}


            </ul>
        </div>
    )
}

