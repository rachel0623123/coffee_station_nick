import { Badge } from "../badges/Badge";
import { IconBadge } from "../badges/IconBadge";
import { GoStarFill } from "react-icons/go";
import { IconButton } from "../buttons/IconButton";
import { FaPlus } from "react-icons/fa6";
import { cartStore } from "../../../store/cartStore";

export const ProductCard = ({id, name, description, price, img, rating} : {id: string, name: string, description: string, price: number, img: string, rating: number}) => {

    const addToCart = cartStore((state) => state.addToCart);

    return (
        <div className="rounded-[32px] overflow-hidden group relative hover:shadow-2xl transition-all duration-500 border border-white/20">
            <div className="relative h-56 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"/>
                <Badge content="BEST SELLER" className={`bestSeller_badge absolute top-4 left-4 ${rating < 4.9 ? "hidden" : ""}`}/>
                <Badge content={`$${price}`} className="product_price absolute top-4 right-4 "/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-bgTxt font-serif font-bold text-coffee-900">{name}</h3>
                    <IconBadge content={String(rating)} className="fav_badge" icon={GoStarFill}/>
                </div>
                <p className="text-coffee-800/60 text-smTxt leading-relaxed line-clamp-2 mb-6 font-medium">{description}</p>
                <IconButton icon={FaPlus} content="Add to Order" className="mdRound_light_icon_btn-hoverDark" onClick={() => {addToCart(id);}}/>
            </div>
        </div>
    );
}