



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayVideo = () => {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    // Fetch the video URLs from your backend
    const fetchVideoUrls = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get/video-url');
        console.log(response);
        setVideoUrls(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoUrls();
  }, []);

  return (
    <div>
      {videoUrls.length > 0 ? (
        videoUrls.map((videoUrl, index) => (
          <div key={index}>
            <video controls>
              <source src={videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default DisplayVideo;