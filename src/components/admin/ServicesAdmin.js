

import React, { useState, useEffect } from "react";
import axios from "axios";

const ServicesAdmin = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

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

  const handleClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("category", category);

    axios.post("http://localhost:5000/api/services", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Signup page</h2>

      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.category}
          </option>
        ))}
      </select>

      <br />
      title:{" "}
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      desc:{" "}
      <input
        value={desc}
        type="text"
        placeholder="desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>Signup</button>
    </div>
  );
};

export default ServicesAdmin;




/*
// Service Add not Category Saifi Code work all services

import './ServicesAdmin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//ck editor start here




const ServicesAdmin = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState('');

    console.log(image, 14)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/home')
        }
    }, []);

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDes = (e) => {
        setDesc(e.target.value)
    }

    const handleClick = () => {
        console.log(title, description, image);

        const formData =  new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)    

        axios.post('http://localhost:5000/api/services',
        formData, 
            {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        )
            .then((res) => {
                console.log(res.data)

                if(res.data.code === 403 && res.data.message === 'Token Expired'){
                    localStorage.setItem('token', null)
                }


            }).catch(err => {
                console.log(err, "err")
            })

    }
    return (
        <div className="admin-card">

            <h1>ADD SERVICES</h1>
            <input value={title} onChange={handleChange} className="input-admin" placeholder='Enter Your Title' />
            <br /><br />
            <input value={description} onChange={handleChangeDes} className="input-admin" placeholder='Enter Your Descriptions' /><br /><br />
            <input onChange={(e)=> setImage(e.target.files[0])} type="file"/>
  




            <button onClick={handleClick} className='add-bttn'>Add Service</button>
        </div>
    )
};

export default ServicesAdmin;

*/