import { Link } from "react-router-dom";
import { ProductCard } from "../card/ProductCard";
import { Button } from "../buttons/Button";

import { products } from "../../data/products";

export const TopSellingSection = () => {

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-smTtl sm:text-Ttl md:text-mdTtl font-bold text-coffee-900 mb-4 font-serif">Our Best Sellers</h2>
                    <p className="text-coffee-800/80 max-w-2xl mx-auto sm:text-mdTxt font-medium">Handpicked favorites that defining our passion for coffee and comfort.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {products.map((item) => {
                        if (item.rating >= 4.9) {
                            return (
                                <ProductCard key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} img={item.image} rating={item.rating}/>
                            );
                        }
                    })}
                </div>
                <div className="text-center mt-12 sm:mt-16">
                    <Link to="/menu">
                        <Button content="View Full Menu →" className="flRound_dark_btn-aftIcon"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}