


import React, { useState  } from "react";
import axios from "axios";

const Pdf = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [pdf, setPdf] = useState("");



  const handleClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("pdf", pdf);
  

    axios.post("http://localhost:5000/pdf", formData)
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
      <input type="file" onChange={(e) => setPdf(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>Signup</button>
    </div>
  );
};

export default Pdf;