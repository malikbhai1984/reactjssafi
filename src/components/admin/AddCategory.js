

import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,  } from "react";
import Table from 'react-bootstrap/Table';



const AddCategory = () =>{

    const [category, setCategory] = useState();

    const [categories, setCategories] = useState([]);

    const handleClick =() =>{
        axios.post(`http://localhost:5000/add/category`, {category}).then(res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })

    }


    //get Category

    useEffect(() => {
        axios.get("http://localhost:5000/get/categories")
          .then(res => {
            setCategories(res.data.category);
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }, []);
   
    

    return(
        <div>

            <Link to="/deashboard">Back To DashBoard</Link>
            
            <h1>Add Category</h1>

            <div className="continer-fluie mt-5">
            <div className='row my-3'>
                <div className='col-md-6 '>
                <div className='text-left'>
                Add Category: <input value={category ||""} type="text" placeholder="Enter Category" onChange={(e)=>{setCategory(e.target.value)}} /><br></br>
        <br></br><br></br>
      
        <Button variant="primary" onClick={handleClick}>Add Category</Button>

        </div>

        </div>



        <div className='col-md-6'>

<Table striped bordered hover>
<thead>
<tr>
  <th>#</th>
 
  <th>Category Name</th>
  <th>Actions</th>
</tr>
</thead>
<tbody>


{


categories.map((cItem, CIndex) =>{

    return(
        <>
          <tr>
          <td>{CIndex}</td>
  <td key={cItem._id}>{cItem.category}</td>
  <td > <Button variant="primary">Edit</Button></td>
  <td > <Button variant="danger">Delete</Button></td>
 
</tr>
        
        </>
    )
  
})

}


</tbody>
</Table>

    </div>
        </div>
        </div>

        </div>
    )
}

export default AddCategory;