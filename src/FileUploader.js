import React, { useState } from "react";
import axios from "axios";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles,setSelectedFiles] = useState([]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    // Make a POST request to your server with the formData
    // You can use libraries like axios or fetch to make the request

    // Example using axios:
    axios
      .post("http://localhost:4000/api/upload", formData)
      .then((response) => {
        // Handle successful upload
        console.log("File uploaded successfully");
      })
      .catch((error) => {
        // Handle upload error
        console.error("Error uploading file:", error);
      });
  };

  const handleMultiFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleMultiUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    // Make a POST request to the backend server
    axios
      .post('http://localhost:4000/api/multi-upload', formData)
      .then((response) => {
        // Handle successful upload
        console.log('Files uploaded successfully');
      })
      .catch((error) => {
        // Handle upload error
        console.error('Error uploading files:', error);
      });
  };

  return (
    <div className="flex flex-coll justify-center h-screen">
      <div className="w-1/2 bg-gray-100 h-full flex flex-col justify-center items-center gap-4">
        <input type="file" onChange={handleFileChange} />
        <button
          onClick={handleUpload}
          className="bg-blue-300 w-36 rounded-lg hover:scale-110"
        >
          Upload
        </button>
      </div>

      <div className="w-1/2 bg-gray-100 h-full flex flex-col justify-center items-center gap-4">
        <input type="file" onChange={handleMultiFileChange} multiple/>
        <button
          onClick={handleMultiUpload}
          className="bg-blue-300 w-44 rounded-lg hover:scale-110"
        >
          multi file Upload
        </button>
      </div>
    </div>
  );
}

export default FileUploader;
