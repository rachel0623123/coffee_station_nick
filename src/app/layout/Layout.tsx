import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { navItems } from "../../shared/data/navItems";

export const Layout = () =>{
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}