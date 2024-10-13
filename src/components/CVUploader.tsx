import React, { useState } from 'react';

const CVUploader = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name
      a.click();
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleUpload} className="mb-4" />
      <button onClick={handleDownload} className="bg-green-500 text-white p-2">Download CV</button>
    </div>
  );
};

export default CVUploader;
