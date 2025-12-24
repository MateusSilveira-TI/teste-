import { useState } from "react";

export const Button = () =>{
    const [ contador, setContador] =useState(0);


    function increment(){
       setContador(contador + 1);
       console.log(contador)
        
    }
    return(
        <button onClick={increment}>click em me{contador}</button>
    );
}


const InputControlado = () => {
  const [nome, setNome] = useState('');

  return (
    <div>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <p>Digitando: {nome}</p>
    </div>
  );
};


export default InputControlado;