import { ProductCard } from "../card/ProductCard";
import { CustomerCard } from "../card/CustomerCard";
import { ImageCard } from "../card/ImageCard";

import { FiMapPin } from "react-icons/fi";

import cafeSrc from "../../../assets/images/ambience/ambience (1).avif";
import aboutSrc from "../../../assets/images/photo-1495474472287-4d71bcdd2085.avif";
import staffSrc from "../../../assets/images/staffs/Lisa.avif";
import mapSrc from "../../../assets/images/Screenshot_1.png";
import cartSrc from "../../../assets/images/products/breakfast (1).avif";
import productSrc from "../../../assets/images/products/coffee (1).avif";
import customerSrc from "../../../assets/images/customers/customer (1).avif";

import { ContactCard } from "../card/ContactCard";
import { CartCard } from "../card/CartCard";
import { AmbienceCard } from "../card/AmbienceCard";

export const CardSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5 text-coffee-900">Cards</h2>
            <div className="flex flex-wrap bg-beige p-8 rounded-2xl">
                <div className="ds_section_content">
                    <ProductCard id="c1" name="Classic Latte" description="Rich espresso with steamed milk and a light layer of foam." price={4.50} img={productSrc} rating={4.8}/>
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
                    <CartCard id="d1" name="Berry Croissant" price={3.80} amount={3} img={cartSrc} />
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
