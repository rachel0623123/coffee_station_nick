import { LuCoffee, LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../shared/ui/buttons/Button";
import { CartNumBadge } from "../../shared/ui/badges/CartNumBadge";
import { cartStore } from "../../store/cartStore";
import { HamburgerBtn } from "./buttons/HamburgerBtn";
import { navItems } from "../data/navItems";

export const NavBar = ({isCartOpen, isDropMenuOpen, setIsCartOpen, setIsDropMenuOpen} : {isCartOpen : boolean, isDropMenuOpen : boolean, setIsCartOpen: (value: boolean) => void, setIsDropMenuOpen: (value: boolean) => void}) => {

    const location = useLocation();
    const totalNum = cartStore((state) => state.totalNum);

    return (
        <nav className="fixed top-4 z-50 left-1/2 w-[94%] sm:w-[90%] max-w-5xl py-2 px-4 md:px-10 rounded-[28px] border border-white/20 shadow-2xl backdrop-blur-xl  bg-white/40 transition-all duration-500 ease-in-out flex items-center justify-between -translate-x-1/2">
            <Link to="/" className="flex items-center gap-2 text-bgTxt sm:text-lgTxt md:text-bgTxt lg:text-lgTxt font-bold text-coffee-900 tracking-tight shrink-0 z-20 font-serif group">
                <span className="p-1.5 sm:p-2 bg-coffee-900 rounded-xl sm:rounded-2xl text-white group-hover:rotate-12 transition-transform duration-300">
                    <LuCoffee />
                </span>
                <span>
                    Coffee
                    <span className="text-coffee-600 font-normal italic">'station</span>
                </span>
            </Link>
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center md:gap-3 lg:gap-10">
                {navItems.map((item) => {
                    return (
                        <Link to={item.path} key={item.path} className={item.path === location.pathname ? "nav_btn_header-act" : "nav_btn_header"}>{item.content}</Link>
                    );
                })}
            </div>
            <div className="flex items-center gap-2 md:gap-4 z-20">
                <button 
                    className="relative p-2.5 text-bgTxt text-coffee-900 hover:bg-white/20 rounded-2xl transition-all duration-300 group"
                    onClick={() => {setIsCartOpen(!isCartOpen)}}
                >
                    <LuShoppingBag />
                    <CartNumBadge num={totalNum} />
                </button>
                <Link to="/reserve">
                    <Button content="Reserve" className="mdRound_dark_btn hidden md:block shadow-xl"/>
                </Link>
                <HamburgerBtn
                    icon={isDropMenuOpen ? LuX : LuMenu}
                    className="mdRound_dark_btn-icon md:hidden"
                    onClick={() => {setIsDropMenuOpen(!isDropMenuOpen)}}
                    ariaLabel={isDropMenuOpen ? "Close menu" : "Open menu"}
                    ariaExpanded={isDropMenuOpen}
                />
            </div>
        </nav>
    );
}