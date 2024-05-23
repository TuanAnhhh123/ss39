import React, { useState, useMemo, useCallback } from 'react';

const B4: React.FC = () => {
  const [trigger, setTrigger] = useState<number>(0);

  const randomNumber = useMemo(() => {
    return Math.floor(Math.random() * 100) + 1;
  }, [trigger]);

  const handleGenerate = useCallback(() => {
    setTrigger(prev => prev + 1);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Random Number Generator</h1>
      <p>Random Number: {randomNumber}</p>
      <button onClick={handleGenerate} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generate
      </button>
    </div>
  );
};

export default B4;
