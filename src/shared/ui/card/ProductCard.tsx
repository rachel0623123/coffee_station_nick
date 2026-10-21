import { Badge } from "../badges/Badge";
import { IconBadge } from "../badges/IconBadge";
import { GoStarFill } from "react-icons/go";
import { IconButton } from "../buttons/IconButton";
import { FaPlus } from "react-icons/fa6";

export const ProductCard = ({name, description, price, img, rating} : {name: string, description: string, price: string, img: string, rating: number}) => {
    return (
        <div className="w-[350px] h-[430px] bg-white/8 rounded-[40px] shadow-xl border-1 border-white ">
            <div className={`w-100 h-1/2 relative rounded-t-[40px] object-cover overflow-hidden`}>
                <img src={img} alt={name} className="w-full h-full rounded-t-[40px] hover:scale-110 bg-center transition-all duration-300"/>
                <Badge content="BEST SELLER" className="bestSeller_badge absolute top-[20px] left-[20px]"/>
                <Badge content={price} className="product_price absolute top-[20px] right-[20px]"/>
            </div>
            <div className="w-100 h-1/2 p-6 rounded-b-[40px]">
                <div className="flex justify-between mb-2">
                    <h3 className="text-bgTxt font-serif font-bold text-coffee-900">{name}</h3>
                    <IconBadge content={String(rating)} className="fav_badge" icon={GoStarFill}/>
                </div>
                <p className="mb-6 text-smTxt text-coffee-800/60">{description}</p>
                <IconButton icon={FaPlus} content="Add to Order" className="mdRound_light_icon_btn-hoverDark" />
            </div>
        </div>
    );
}