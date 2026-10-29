import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CtrlBtn } from "../buttons/CtrlBtn";
import { cartStore } from "../../../store/cartStore";

export const CartCard = ({id, img, name, price, amount} : {id: string, img: string, name: string, price: number, amount: number}) => {

    const increase = cartStore((state) => state.increase);
    const removeItem = cartStore((state) => state.removeItem);

    const controlFun = (id: string, x: number) => {
        increase(id, x);
        
    }

    return (
        <div className="backdrop-blur-ml bg-white/30 p-4 rounded-xl flex gap-4 justify-between items-center">
            <div className="flex gap-5">
                <img className="w-20 h-20 rounded-lg object-cover" src={img} alt={name} />
                <div>
                    <h4 className="font-bold text-coffee-900">{name}</h4>
                    <p className="text-coffee-900 font-bold">${price}</p>
                    <div className="flex items-center gap-3 mt-2">
                        <CtrlBtn icon={FaMinus} className="circle_light_ctrl_btn" onClick={() => {controlFun(id, -1)}}/>
                        <p>{amount}</p>
                        <CtrlBtn icon={FaPlus} className="circle_dark_ctrl_btn" onClick={() => {controlFun(id, 1);}}/>
                    </div>
                </div>
            </div>
            <button className="p-2 text-terracotta hover:bg-cream rounded-full transition-colors text-bgTxt" onClick={() => {removeItem(id)}}><IoCloseOutline /></button>
        </div>
    );
}