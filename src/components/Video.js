





import React, { useState } from 'react';
import axios from 'axios';

const Video = () => {
  const [name, setName] = useState('');
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('video', video);

    try {
      const response = await axios.post('http://localhost:5000/create/video', formData, {
       // headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading video');
    }
  };

  return (
    <div>
      <h1>Video Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Video:</label>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );

};

export default Video;
