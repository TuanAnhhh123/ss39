import React, { useState, useCallback } from 'react';

const B1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default B1;
