



import React, { useState, useEffect } from "react";
import axios from "axios";


const PdfList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/download/pdf/:id")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  const handleDownload = (imageUrl) => {
    const downloadUrl = `http://localhost:5000/download/pdf/${imageUrl}`;
  
    axios({
      url: downloadUrl,
      method: 'GET',
      responseType: 'blob', // Set the response type to 'blob' to handle binary data
    })
      .then((response) => {
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(new Blob([response.data.data]));
        downloadLink.href = url;
        downloadLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>PDF List</h2>
      <div>
        {data.map((pdf) => (
          <div key={pdf._id}>
            <h3>{pdf.title}</h3>
            <p>{pdf.description}</p>
            <button onClick={() => handleDownload(pdf._id)}>Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfList;
