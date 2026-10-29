import { useState } from "react";
import { products } from "../../data/products";
import { Button } from "../buttons/Button";
import { ProductCard } from "../card/ProductCard";

export const ProductSection = () => {
    
    const [actCategory, setActCategory] = useState("All");
    const category = ["All", "Coffee", "Tea", "Breakfast", "Desserts", "Combos"];
    
    return (
        <section className="w-full">
            <div className="w-lgScreen m-auto">
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-bgTtl font-serif font-bold text-coffee-900 mb-4">Our Menu</h1>
                    <p className="text-mdTxt text-coffee-800/80 max-w-2xl mx-auto">Explore our full range of handcrafted beverages and delicious treats.</p>
                </div>
                <div className="z-30 mb-12 flex justify-center">
                    <div className="px-1.5 py-1.5 rounded-full flex gap-2 overflow-x-auto shadow-lg max-w-full">
                        {category.map((item, index) => {
                            
                            return (
                                <Button 
                                    className={actCategory === item ? `flRound_dark_btn-smallSize` : `flRound_light_btn-smallSize`} 
                                    content={item} 
                                    key={index}
                                    onClick={() => {setActCategory(item)}}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-8 min-h-[50vh]">
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