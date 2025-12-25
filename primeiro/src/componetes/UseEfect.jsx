import { useEffect } from 'react';
import { useState } from 'react';



const Efect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Só rodo quando o contador muda!");
  }, [count]); 

  return <button onClick={() => setCount(count + 1)}>Contar: {count} </button>;
};

export default Efect;