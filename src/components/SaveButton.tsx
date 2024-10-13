
import React, { useState } from 'react';

const SaveButton = () => {
  const [inputData, setInputData] = useState('');

  const handleSave = () => {
    // Logic to save the data (in state or send to API)
    console.log('Saved:', inputData);
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        value={inputData} 
        onChange={(e) => setInputData(e.target.value)} 
        className="border p-2"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 ml-4">Save</button>
    </div>
  );
};

export default SaveButton;
