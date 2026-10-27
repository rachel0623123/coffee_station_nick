import { useState } from "react";
import { CartSideBar } from "../../shared/ui/CartSIdeBar";
import { NavBar } from "../../shared/ui/NavBar";

export const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header>
            <NavBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
            <div className={`fixed inset-0 backdrop-blur-xl bg-black/20 backdrop-blur-sm z-40 ${isCartOpen ? "" : "hidden"}`} onClick={() => {setIsCartOpen(false)}}></div>
            <CartSideBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </header>
    );
}