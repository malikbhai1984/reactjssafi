



import axios from 'axios';
import React, { useEffect, useState, } from  'react'

import InputGroup from 'react-bootstrap/InputGroup';


const Category = () =>{

   const [porducts, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   const[checked,setChecked] = useState([]);
 



//get all Products

const getAllProducts = async () =>{
    
    try{
        const {data} = await axios.get('http://localhost:7000/api/getpost');
        setProducts(data.products)
    }catch(err){
        console.log(err)
    }
}
    useEffect(()=>{
       if(!checked.length) getAllProducts()
       
    },[checked])


      //get all categrory
   const getAllCategories = async () =>{
    const {data} = await axios.get('http://localhost:7000/get/categories');

    if(data?.success){
        console.log(data)
        setCategories(data?.category);

    }

   }

   useEffect(()=>{
    getAllCategories()
   },[])

   //filter by categories

   const handleFilter = (value, id) =>{
    let all = [...checked]
    if(value){
        all.push( id)
    }else{
        all = all.filter( c => c!== id)
    }
    setChecked(all);

   }

  // filter product by category
   
  const filterProduct = async () =>{

    try{
        const {data} = await axios.post('http://localhost:7000/filter/categories', {checked});
        setProducts(data?.products)
    }catch(err){
        console.log(err)
    }
  };

  useEffect(()=>{
   if(checked.length) filterProduct()
},[checked])

    return(
        <div>
            <h1>GET Category {/*JSON.stringify(checked,null, 4)*/} </h1>
            {console.log(checked, 66)}

        <div>
            <div><h5>Categories</h5>
                
            {
            categories.map((c)=>{
                return(
                    <>
                     <InputGroup.Radio aria-label="Radio button for following text input" 
                      onClick={(e)=>{handleFilter(e.target.checked, c._id)}}/>

                   <button  onClick={(e)=>{handleFilter(e.target.checked, c._id)}}>{c.name}</button> {c._id}<br></br><br></br>
                    </>
                )
            })
        }
                
                
                
                
                 </div>

            <div><h5>Display All Products  </h5> 
            
            {
                    porducts.map((p)=>{
                        return(
                            <>
                            {p.name}<br></br>
                            {p.description}
                            </>
                        )
                    })
                }
            
            
            </div>

        </div>

        </div>
    )
}

export default Category;