import React, { useState } from 'react';
import axios from 'axios';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Make a POST request to your server with the formData
    // You can use libraries like axios or fetch to make the request

    // Example using axios:
    axios.post('/upload', formData)
      .then(response => {
        // Handle successful upload
        console.log('File uploaded successfully');
      })
      .catch(error => {
        // Handle upload error
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className='w-full bg-yellow-300 h-full'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;
