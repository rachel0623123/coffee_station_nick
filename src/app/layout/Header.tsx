import { LuCoffee, LuShoppingBag } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../shared/ui/buttons/Button";
import { CartNumBadge } from "../../shared/ui/badges/CartNumBadge";

const navItems = [
    {
        content: "HOME",
        path: "/",
    },
    {
        content: "ABOUT",
        path: "/about",
    },
    {
        content: "MENU",
        path: "/menu",
    },
    {
        content: "CONTACT",
        path: "/contact", 
    },
];

export const Header = () => {

    const location = useLocation();

    return (
        <header className="fixed top-4 z-50 left-1/2 w-mdScreen -translate-x-1/2 py-2 px-10 rounded-full border-1 border-white/20 
        shadow-2xl backdrop-blur-xl transition-all duration-500 flex items-center justify-between bg-white/40 border-white/40">
            <Link to="/" className="flex items-center gap-2 text-lgTxt font-bold text-coffee-900 tracking-tight shrink-0 z-20 font-serif group cursor-pointer">
                <span className="p-2 bg-coffee-900 text-bgTxt rounded-2xl text-white group-hover:rotate-12 transition-transform duration-300">
                    <LuCoffee />
                </span>
                <span >
                    Ciffee
                    <span className="text-coffee-600 font-normal italic">'station</span>
                </span>
            </Link>
            <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
                {navItems.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={item.path === location.pathname ? "nav_btn_header-act" : "nav_btn_header"}>{item.content}</Link>
                    );
                })}
            </div>
            <div className="flex items-center gap-8 z-20">
                <button className="relative p-2.5 text-bgTxt text-coffee-900 hover:bg-white/20 rounded-2xl transition-all duration-300 group">
                    <LuShoppingBag />
                    <CartNumBadge num={3} />
                </button>
                <Link to="/reserve">
                    <Button content="Reserve" className="mdRound_dark_btn" />
                </Link>
            </div>
        </header>
    );
}