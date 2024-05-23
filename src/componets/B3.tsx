import React, { useState, useCallback, ChangeEvent } from 'react';

const B3: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  const handleChangeColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Picker</h1>
      <input 
        type="color" 
        value={selectedColor} 
        onChange={handleChangeColor} 
        style={{ cursor: 'pointer', width: '100px', height: '50px' }}
      />
      <p>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      <div 
        style={{ 
          width: '100px', 
          height: '100px', 
          backgroundColor: selectedColor, 
          border: '1px solid #000', 
          marginTop: '10px' 
        }}
      />
    </div>
  );
};

export default B3;
