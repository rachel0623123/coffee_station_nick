import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NavContext } from "../context/NavContext";
import { navItems } from "../../shared/data/navItems";

export const Layout = () =>{
    return (
        <NavContext.Provider value={navItems}>
            <Header/>
            <Outlet/>
            <Footer/>
        </NavContext.Provider>
    );
}