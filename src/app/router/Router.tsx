import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { DesignSystem } from "../../pages/DesignSystem";
import { Home } from "../../pages/Home";
import { Menu } from "../../pages/Menu";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Reserve } from "../../pages/Reserve";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/design_system" element={<DesignSystem />}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/reserve" element={<Reserve/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}