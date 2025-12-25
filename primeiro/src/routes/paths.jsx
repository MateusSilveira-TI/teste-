/*import BrowserRouter from "./componetes/BrowserRouter";
import Routes from "./componetes/Routes";
import Route from "./componetes/Route";*/
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PagesLayuts from "../pagslayut.jsx/PagesLayuts";
import Homem from "../pages/Homem";
import Produtos from "../pages/Produtos";
import Infomacoes from "../pages/Infomacao";
import NotFound from "../pages/NotFound";

export default function Paths() {
  return (
    <>
    <BrowserRouter>
    
      <Routes> 
        <Route path="/" element={<PagesLayuts />}>

        <Route index element={<Homem />} />
        <Route path="/produtos" element={<Produtos />} />
        
        </Route>
       <Route path="*" element={<NotFound />}/>
      </Routes> 
      
    </BrowserRouter> 
    </>
    
  );
} 