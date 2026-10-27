import { Link } from "react-router-dom";
import { ProductCard } from "../card/ProductCard";
import { Button } from "../buttons/Button";

import { products } from "../../data/products";

export const TopSellingSection = () => {

    return (
        <section className="w-lgScreen m-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-mdTtl font-bold text-coffee-900 mb-4 font-serif">Our Best Sellers</h2>
                <p className="text-coffee-800/80 mx-auto text-mdTxt font-medium">Handpicked favorites that defining our passion for coffee and comfort.</p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                {products.map((item, index) => {
                    if (item.rating >= 4.9) {
                        return (
                            <ProductCard key={index} name={item.name} description={item.description} price={item.price} img={item.image} rating={item.rating}/>
                        );
                    }
                })}
            </div>
            <Link to="/menu" className="text-center mt-16 block">
                <Button content="View Full Menu →" className="flRound_dark_btn-aftIcon"/>
            </Link>
        </section>
    );
}