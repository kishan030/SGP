import React, { useEffect, useState } from "react";
import "./list1.css";

const Editlist = (props) => {
  return (
    <div className="input-group input-group-sm ">

      <input type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        defaultValue={props.RackNo}
      />

    </div>
  )
}


export const List = ({ product_array, Name, Packing, Storage1, Storage2 }) => {
  const [editname, seteditname] = useState(false)
  const [editpacking, seteditpacking] = useState(false)
  const [editstorage1, seteditstorage1] = useState(false)
  const [editstorage2, seteditstorage2] = useState(false)

  useEffect(() => {
    Name === true ? seteditname(true) : seteditname(false);
    Packing === true ? seteditpacking(true) : seteditpacking(false);
    Storage1 === true ? seteditstorage1(true) : seteditstorage1(false);
    Storage2 === true ? seteditstorage2(true) : seteditstorage2(false);


  }, [Name, Packing, Storage1, Storage2])

  //use usecallback function

  return (
    <div className=''>
      {/* {console.log()} */}

      <table id='zebra' className='table'>
        <thead className='heading_style'>
          <tr>
            {/* <th>Quantity</th> */}
            <th>NAME</th>
            <th>PACKING</th>
            <th>MRP</th>
            {/* <th>COMPANY</th> */}
            <th>STORAGE-1</th>
            <th>STORAGE-2</th>

          </tr>
        </thead>
        <tbody>
          {product_array.map((product, i) => {
            return (

              <tr key={i}>
                {/* <td>{product.Quantity}</td> */}
                {editname === true ? <td><Editlist RackNo={product.Name}> {product.Name} </Editlist></td> : <td>{product.Name}</td>}

                {editpacking === true ? <td><Editlist RackNo={product.Packing}> {product.Packing} </Editlist></td> : <td>{product.Packing}</td>}


                <td>{product.Mrp}</td>
                {/* <td>{product_array[i].company}</td>  */}

                {
                  editstorage1 === true
                    ?
                    <td className=' bg-light-blue ttu tracked'>
                      <Editlist RackNo={product.RackNo}>
                        {product.RackNo}
                      </Editlist>
                    </td>
                    :
                    <td>{product.RackNo}</td>
                }

                {
                  editstorage2 === true
                    ?
                    <td className=' bg-light-silver ttu tracked'>
                      <Editlist RackNo={product.ExComment} >
                        {product.ExComment}
                      </Editlist>
                    </td>
                    :
                    <td>{product.ExComment}</td>
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
