import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavContext } from "../../store/NavContext";

export const DropMenu = ({isDropMenuOpen} : {isDropMenuOpen : boolean}) => {

    const navItems = useContext(NavContext);
    const location = useLocation();

    return (
        <div className={`fixed top-24 left-1/2 w-[94%] rounded-[32px] sm:rounded-[40px] z-50 p-8 sm:p-10 shadow-2xl flex flex-col items-center gap-6 sm:gap-8 border border-white/40 -translate-x-1/2 backdrop-blur-3xl ${isDropMenuOpen ? "" : "hidden"}`}>
            <div className="flex flex-col gap-4 sm:gap-6 w-full text-center">
                {navItems.map((item, index) => {
                    return (
                        <div className="opacity: 1; transform: none;" key={index}>
                            <Link 
                                to={item.path} 
                                className={`text-bgTxt sm:text-lgTxt font-serif font-bold transition-all ${item.path === location.pathname ? "text-terracotta italic" : "text-coffee-900"}`}
                            >
                                {item.content}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="w-full pt-6 border-t border-coffee-900/10">
                <Link to="/reserve" className="w-full block py-4 bg-coffee-900 text-white rounded-[20px] sm:rounded-[24px] font-bold text-center sm:text-bgTxt shadow-2xl">Book a Table</Link>
            </div>
        </div>
    );
}