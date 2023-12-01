import React, { useState } from 'react';

const PrivateFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // In a real app, you would typically upload the file to a server here
    console.log('File to upload:', selectedFile);
    setUploadedFiles([...uploadedFiles, selectedFile]);
    setSelectedFile(null); // Reset the selected file
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Private File Upload</h2>
      <input
        type="file"
        onChange={handleFileSelect}
        style={{ width: '100%', margin: '20px 0' }}
      />
      {selectedFile && (
        <div style={{ marginBottom: '20px' }}>
          <p>File selected: {selectedFile.name}</p>
        </div>
      )}
      <button
        onClick={handleFileUpload}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        disabled={!selectedFile}
      >
        Upload
      </button>
      {uploadedFiles.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Uploaded Files</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} style={{ marginTop: '10px' }}>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PrivateFiles;
