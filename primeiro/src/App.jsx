/*function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}*/


/*function Hello (){
  return(
    <h1>Bem vindo</h1>
  );
}

function App(){
  return(
    <div className="primaria">
      <section className="secundaria">
        <h2>Esse é código que vai mostra</h2>,
    <Hello/>
      </section>
      
    </div>
    
  );
}

export default App;*/




/*function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section className="bg-primary">
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}*/

// DESAFIO DA DOCUMENTAÇÃO DO REACT
/*function App() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

export default App;*/

//SEGUNDO DESAFIO DA DOCUMENTAÇÃO
/*export default function App() {
  return(
        <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />

  );
}*/

//TERCEIRO DESAFIO DA DOCUMENTAÇÃO
/*function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}*/


/*export default function App(){
  return(
    <div>
      <h1>Testando meu proprio comando</h1>
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="opa" />
      
    </div>
  );
}*/

/*import Galeria from'./galeria.jsx'

export default function App(){
  return(
    <Galeria />
  );
}*/

/* import Galeria from "./galeria"; */
/*import Galeria, {Teste}  from "./galeria";*/
/*import Forma from "./galeria";*/
/*import { Children } from "react";
import Dinamico from "./PropsDinamica";*/
import { Button } from "./componetes/Button";
import InputControlado from "./componetes/Button";
import Efect from "./componetes/UseEfect";
import App from "./componetes/UseEfect";
import { InputComRef } from "./componetes/UseRef";

/*function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      /*width={100}
      height={100}*/
      /*size={10}
    />
  );
}*/

/*export default function Profile() {
  return (
    <>
    
    <Avatar />,
    
    <Forma sabor="Morango" cobertura="Ninho"/>
    <Forma sabor="Laranja" cobertura="chocolate"/>

    </>
  );
}*/
  /*<Galeria />
    /<Teste />*/


export default function Profile(){
  return(
    /*<Dinamico>
      <h1>teste dinamico</h1>
    </Dinamico>
    <Button />,
    <InputControlado />,
    <InputComRef />*/
    <Efect />
  );
}