import { Badge } from "../badges/Badge";
import { IconBadge } from "../badges/IconBadge";
import { GoStarFill } from "react-icons/go";
import { IconButton } from "../buttons/IconButton";
import { FaPlus } from "react-icons/fa6";

// type ProductCardProps = {
//     id: string,
//     name: string,
//     category: string,
//     description: string,
//     price: string,
//     image: string,
//     rating: string
// };

// export const ProductCard = ({id,name,category,description,price,image,rating} : ProductCardProps) => {
//     return (
//         <div className="w-[280px] h-[430px] bg-coffee-200 rounded-[40px]">
//             <div className={"w-100 h-1/2 relative rounded-t-[40px] bg-[url(" + {image} + ")]"}>
//                 <Badge content="BEST SELLER" className="bestSeller_badge absolute top-[20px] left-[20px]"/>
//                 <Badge content="$3.80" className="product_price absolute top-[20px] right-[20px]"/>
//             </div>
//             <div className="w-100 h-1/2 p-6 rounded-b-[40px]">
//                 <div className="flex justify-between mb-2">
//                     <h3 className="text-bgTxt font-serif font-bold text-coffee-900">{name}</h3>
//                     <IconBadge content={rating} className="fav_badge" icon={GoStarFill}/>
//                 </div>
//                 <p className="mb-6 text-smTxt text-coffee-800/60">{description}</p>
//                 <Button content="Add to Order" className="mdRound_light_btn-hoverDark w-100" />
//             </div>
//         </div>
//     );
// }

export const ProductCard = () => {
    return (
        <div className="w-[280px] h-[430px] bg-coffee-200 rounded-[40px]">
            <div className="w-100 h-1/2 relative rounded-t-[40px] bg-[length:100%_auto] hover:bg-[length:110%_auto] bg-center transition-all duration-300
            bg-[url(https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600)] ">
                <Badge content="BEST SELLER" className="bestSeller_badge absolute top-[20px] left-[20px]"/>
                <Badge content="$4.50" className="product_price absolute top-[20px] right-[20px]"/>
            </div>
            <div className="w-100 h-1/2 p-6 rounded-b-[40px]">
                <div className="flex justify-between mb-2">
                    <h3 className="text-bgTxt font-serif font-bold text-coffee-900">Classic Latte</h3>
                    <IconBadge content="4.8" className="fav_badge" icon={GoStarFill}/>
                </div>
                <p className="mb-6 text-smTxt text-coffee-800/60">Rich espresso with steamed milk and a light layer of foam.</p>
                <IconButton icon={FaPlus} content="Add to Order" className="mdRound_light_btn-hoverDark" />
            </div>
        </div>
    );
}