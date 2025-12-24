import { useRef } from 'react';

export const InputComRef = () => {
  const inputRef = useRef(null);

  const verValor = () => {
    alert(inputRef.current.value); // Acessa o valor direto do DOM
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={verValor}>Ver Valor</button>
    </div>
  );
};