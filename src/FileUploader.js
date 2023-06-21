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
    axios.post('http://localhost:4000/api/upload', formData)
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
      <div className='h-screen'>
    <div className='w-full bg-gray-100 h-full flex flex-col justify-center items-center gap-4'>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className='bg-blue-300 w-36 rounded-lg hover:scale-110'>Upload</button>
      </div>
    </div>
  );
}

export default FileUploader;
