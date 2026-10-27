import { LuShoppingBag, LuX } from "react-icons/lu";
import { Button } from "./buttons/Button";
import { CartCard } from "./card/CartCard";
import { products } from "../data/products";

export const CartSideBar = ({isCartOpen, setIsCartOpen} : {isCartOpen : boolean, setIsCartOpen: (value: boolean) => void}) => {

    return (
        <aside className={`fixed top-0 right-0 h-full w-full max-w-md backdrop-blur-xl z-50 shadow-2xl flex flex-col border-1 border-white/30 ${isCartOpen ? "" : "hidden"}`}>
            <div className="p-6 flex items-center justify-between border-b border-white/10">
                <h2 className="text-2xl font-serif font-bold text-coffee-900 flex items-center gap-2">
                    <LuShoppingBag />
                    Your Order
                </h2>
                <button className="p-2 text-lgTxt hover:bg-white/20 rounded-full transition-colors" onClick={() => {setIsCartOpen(false)}}>
                    <LuX />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {products.map((item, index) => {
                    return (
                        <CartCard img={item.image} name={item.name} price={item.price} amount={3} key={index}/>
                    );
                })}

                <div className={`h-full flex flex-col items-center justify-center text-center text-coffee-800/60 ${products.length ? "" : "hidden"}`}>
                    <LuShoppingBag className="mb-4 opacity-50 text-mdTtl"/>
                    <p className="mdTxt">Your cart is empty</p>
                    <button className="mt-4 text-primary font-bold hover:underline">Browse Menu</button>
                </div>
            </div>

            <div className={`p-6 border-1 border-white/10 bg-white/5 backdrop-blur-md ${products.length ? "" : "hidden"}`}>
                <div className="flex justify-between items-center mb-6 text-xl font-bold text-coffee-900">
                    <span>Total</span>
                    <span>$18.70</span>
                </div>
                <Button className="mdRound_dark_btn-bigSize" content="Checkout"/>
            </div>
        </aside>
    );
}