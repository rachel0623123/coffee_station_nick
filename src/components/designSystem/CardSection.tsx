import { ProductCard } from "../card/ProductCard";
// import { products } from "../../data/products";
import { CustomerCard } from "../card/CustomerCard";
import { ImageCard } from "../card/ImageCard";

import { FiMapPin } from "react-icons/fi";

import cafeSrc from "../../assets/images/ambience/photo-1442512595331-e89e73853f31.avif";
import aboutSrc from "../../assets/images/photo-1495474472287-4d71bcdd2085.avif";
import staffSrc from "../../assets/images/staffs/photo-1517841905240-472988babdf9.avif";
import mapSrc from "../../assets/images/Screenshot_1.png";
import cartSrc from "../../assets/images/products/photo-1490474418585-ba9bad8fd0ea.avif";
import { ContactCard } from "../card/ContactCard";
import { CartCard } from "../card/CartCard";

export const CardSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5">Cards</h2>
            <div className="flex flex-wrap bg-coffee-100 p-8 rounded-2xl">
                {/* <ProductCard id={products[0].id} name={products[0].name} category={products[0].category} description={products[0].description} price={products[0].price} image={products[0].image} rating={products[0].rating}/> */}
                <div className="ds_section_content">
                    <ProductCard />
                </div>
                <div className="ds_section_content">
                    <ImageCard src={cafeSrc} className1="cafe_image_card" className2="cafe_image_card-img"/>
                </div>
                <div className="ds_section_content">
                    <ContactCard title="Visit Us" content="PDPM IIITDM JABALPUR, Chandeli" icon={FiMapPin} />
                </div>
                <div className="ds_section_content">
                    <CustomerCard />
                </div>
                <div className="ds_section_content">
                    <ImageCard src={aboutSrc} className1="about_image_card" className2="about_image_card-img"/>
                </div>
                <div className="ds_section_content">
                    <CartCard name="Berry Croissant" price={3.80} amount={3} img={cartSrc} />
                </div>
                <div className="ds_section_content">
                    <ImageCard src={staffSrc} className1="staff_image_card" className2="staff_image_card-img"/>
                </div>
                <div className="ds_section_content">
                    <ImageCard src={mapSrc} className1="map_image_card" className2="map_image_card-img"/>
                </div>
                
            </div>
        </section>
    );
}
