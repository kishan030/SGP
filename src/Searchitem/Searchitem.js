import React, { useState, useEffect } from "react";
import { List } from "../List/List";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./searchitem.css";
var filtertable;

function Searchitem() {
  const [searchfield, setSearchfield] = useState("");
  const [product_array, setproduct_array] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [Name, setName] = useState(false)
  const [Packing, setPacking] = useState(false)
  const [Storage1, setStorage1] = useState(false)
  const [Storage2, setStorage2] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      fetch("http://localhost:3000/searchitem", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchquery: searchfield,
        }),
      })
        .then((response) => {
          response.text().then((data) => {
            const parsed = data.trim() ? JSON.parse(data) : [];
            setproduct_array(parsed);
          });
        })

        .catch((e) => console.log("errors in frontend" + e));
    }, 500)

  }, [searchfield]);




  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = (e) => {
    setAnchorEl(null);

  };

  const handleOptionAlert = () => {
    alert("Search for Product first")
  }

  const handleNameOption = (e) => {
    searchfield === "" ?
      handleOptionAlert()
      :
      setName(current => !current);
  }

  const handlePackingOption = (e) => {
    searchfield === "" ?
      handleOptionAlert()
      :
      setPacking(current => !current)
  }

  const handleStorage1Option = (e) => {
    searchfield === "" ?
      handleOptionAlert()
      :
      setStorage1(current => !current)
  }

  const handleStorage2Option = (e) => {
    searchfield === "" ?
      handleOptionAlert()
      :
      setStorage2(current => !current)
  }

  const handleSave = () => {
    setName(false)
    setPacking(false)
    setStorage1(false)
    setStorage2(false)

  }

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };


  filtertable = product_array.filter((product) => {
    return product.Name.toLowerCase()
      .replaceAll(" ", "")
      .includes(searchfield.toLowerCase().replaceAll(" ", ""));
  });


  return (
    <div className=''>
      <div className=' bg-light-green pa4 ph6'>
        <div className='searchbar'>
          <input
            onChange={onSearchChange}
            className='searchbox_style'
            type='text'
            placeholder='Search for product'
          />

          <Button
            onClick={handleClick}
            className='dropdown_look'
            aria-controls="simple-menu"
            aria-haspopup="true">
            Edit
          </Button>
          <Menu

            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={(e) => { handleClose(e); handleNameOption(e) }}>Name</MenuItem>
            <MenuItem onClick={(e) => { handleClose(e); handlePackingOption(e) }}>Packing</MenuItem>
            <MenuItem onClick={(e) => { handleClose(e); handleStorage1Option(e) }}>Storage-1</MenuItem>
            <MenuItem onClick={(e) => { handleClose(e); handleStorage2Option(e) }}>Storage-2</MenuItem>
          </Menu>

          <button onClick={handleSave} className='searchbar_save_button'>Save</button>

        </div>
      </div>
      <List Name={Name} Packing={Packing} Storage1={Storage1} Storage2={Storage2} product_array={filtertable} />
    </div>
  );
};

export default Searchitem;
