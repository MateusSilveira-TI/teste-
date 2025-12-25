import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Header from "../componets/Header";

const PagesLayuts = () => {
    return (
        <>
        <Header/>,
        <Outlet/>,
        <Footer/>
        </>
    );
};    
export default PagesLayuts;