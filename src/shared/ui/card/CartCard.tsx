import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CtrlBtn } from "../buttons/CtrlBtn";

export const CartCard = ({img, name, price, amount} : {img: string, name: string, price: number, amount: number}) => {
    return (
        <div className="w-full p-4 rounded-xl flex gap-4 items-center border-[1px] border-white shadow-xl">
            <img className="w-20 h-20 rounded-lg object-cover" src={img} alt={name} />
            <div>
                <h4 className="font-bold text-coffee-900">{name}</h4>
                <p className="text-coffee-900 font-bold">${price}</p>
                <div className="flex items-center gap-3 mt-2">
                    <CtrlBtn icon={FaMinus} className="circle_light_ctrl_btn" />
                    <p>{amount}</p>
                    <CtrlBtn icon={FaPlus} className="circle_dark_ctrl_btn" />
                </div>
            </div>
            <button className="p-2 text-terracotta hover:bg-cream rounded-full transition-colors text-bgTxt"><IoCloseOutline /></button>
        </div>
    );
}