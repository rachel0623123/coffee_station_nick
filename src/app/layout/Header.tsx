import { useState } from "react";
import { NavBar } from "../../shared/ui/NavBar";
import { CartSideBar } from "../../shared/ui/CartSideBar";
import { DropMenu } from "../../shared/ui/DropMenu";

export const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

    return (
        <header>
            <NavBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} isDropMenuOpen={isDropMenuOpen} setIsDropMenuOpen={setIsDropMenuOpen}/>
            <DropMenu isDropMenuOpen={isDropMenuOpen} setIsDropMenuOpen={setIsDropMenuOpen} />
            <div className={`fixed inset-0 backdrop-blur-xl bg-black/20 backdrop-blur-sm  md:hidden z-40 ${isDropMenuOpen ? "" : "hidden"}`} onClick={() => {setIsDropMenuOpen(false);}}></div>
            <div className={`fixed inset-0 backdrop-blur-xl bg-black/20 backdrop-blur-sm z-40 ${isCartOpen ? "" : "hidden"}`} onClick={() => {setIsCartOpen(false);}}></div>
            <CartSideBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </header>
    );
}