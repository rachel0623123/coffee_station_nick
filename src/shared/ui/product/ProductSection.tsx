import { useState } from "react";
import { products } from "../../data/products";
import { Button } from "../buttons/Button";
import { ProductCard } from "../card/ProductCard";

export const ProductSection = () => {
    
    const [actCategory, setActCategory] = useState("All");
    const category = ["All", "Coffee", "Tea", "Breakfast", "Desserts", "Combos"];
    
    return (
        <section className="w-full">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-8">
                    <h1 className="text-Ttl sm:text-mdTtl md:text-bgTtl font-serif font-bold text-coffee-900 mb-4">Our Menu</h1>
                    <p className="sm:text-mdTxt text-coffee-800/80 max-w-2xl mx-auto">Explore our full range of handcrafted beverages and delicious treats.</p>
                </div>
                <div className="sticky top-24 sm:top-28 z-30 mb-8 sm:mb-12 flex justify-center">
                    <div className="px-1.5 py-1.5 rounded-3xl sm:rounded-full flex flex-wrap justify-center gap-1 sm:gap-2 shadow-lg max-w-full backdrop-blur-2xl bg-white/40">
                        {category.map((item) => {
                            
                            return (
                                <Button 
                                    className={actCategory === item ? `flRound_dark_btn-smallSize group` : `flRound_light_btn-smallSize group`} 
                                    content={item} 
                                    key={item}
                                    onClick={() => {setActCategory(item)}}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 min-h-[50vh]">
                    {products.map((item) => {
                        if (actCategory === "All" || actCategory === item.category)
                        return (
                            <ProductCard id={item.id} name={item.name} description={item.description} price={item.price} img={item.image} rating={item.rating} key={item.id} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}