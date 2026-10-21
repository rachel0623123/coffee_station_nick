import { ProductCard } from "../card/ProductCard";
// import { products } from "../../data/products";
import { CustomerCard } from "../card/CustomerCard";
import { ImageCard } from "../card/ImageCard";

import { FiMapPin } from "react-icons/fi";

import cafeSrc from "../../../assets/images/ambience/photo-1442512595331-e89e73853f31.avif";
import aboutSrc from "../../../assets/images/photo-1495474472287-4d71bcdd2085.avif";
import staffSrc from "../../../assets/images/staffs/photo-1517841905240-472988babdf9.avif";
import mapSrc from "../../../assets/images/Screenshot_1.png";
import cartSrc from "../../../assets/images/products/photo-1490474418585-ba9bad8fd0ea.avif";
import productSrc from "../../../assets/images/products/photo-1490474418585-ba9bad8fd0ea.avif";
import customerSrc from "../../../assets/images/customers/photo-1494790108377-be9c29b29330.avif";

import { ContactCard } from "../card/ContactCard";
import { CartCard } from "../card/CartCard";
import { AmbienceCard } from "../card/AmbienceCard";

export const CardSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5 text-coffee-900">Cards</h2>
            <div className="flex flex-wrap bg-beige p-8 rounded-2xl">
                {/* <ProductCard id={products[0].id} name={products[0].name} category={products[0].category} description={products[0].description} price={products[0].price} image={products[0].image} rating={products[0].rating}/> */}
                <div className="ds_section_content">
                    <ProductCard name="Classic Latte" description="Rich espresso with steamed milk and a light layer of foam." price="$4.50" img={productSrc} rating={4.8}/>
                </div>
                <div className="ds_section_content">
                    <AmbienceCard src={cafeSrc} />
                </div>
                <div className="ds_section_content">
                    <ContactCard title="Visit Us" content="PDPM IIITDM JABALPUR, Chandeli" icon={FiMapPin} />
                </div>
                <div className="ds_section_content">
                    <CustomerCard name="Rajesh" job="Freelance Designer" content="The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning." avatar={customerSrc} />
                </div>
                <div className="ds_section_content">
                    <ImageCard src={aboutSrc} divStyle="about_image_card" imgStyle="about_image_card-img"/>
                </div>
                <div className="ds_section_content">
                    <CartCard name="Berry Croissant" price={3.80} amount={3} img={cartSrc} />
                </div>
                <div className="ds_section_content">
                    <ImageCard src={staffSrc} divStyle="staff_image_card" imgStyle="staff_image_card-img"/>
                </div>
                <div className="ds_section_content">
                    <ImageCard src={mapSrc} divStyle="map_image_card" imgStyle="map_image_card-img"/>
                </div>
                
            </div>
        </section>
    );
}
