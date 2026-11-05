import { LuMapPin, LuPhone, LuMail  } from "react-icons/lu";
import { ContactCard } from "../card/ContactCard";

import src from "../../../assets/images/Screenshot_1.png";
import { ImageCard } from "../card/ImageCard";

export const GetInTouchSection = () => {
    return (
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16 sm:mb-24">
                    <span className="text-terracotta font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sm1Txt sm:text-smTxt mb-3 sm:mb-4 block">Reach Out</span>
                    <h1 className="text-Ttl sm:text-bgTtl md:text-lgTtl font-bold text-coffee-900 mb-6 sm:mb-8 font-serif italic">
                        Get in <span className="not-italic">Touch</span>
                    </h1>
                    <p className="text-coffee-800/70 max-w-2xl mx-auto font-medium text-mdTxt sm:text-bgTxt leading-relaxed">Whether you have a question about our beans or just want to share your coffee experience, we're here to listen.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-20">
                    <ContactCard title="Visit Us" content="PDPM IIITDM JABALPUR, Chandeli" icon={LuMapPin} />
                    <ContactCard title="Call Us" content="+91 9999999999 Mon-Sun: 7am - 8pm" icon={LuPhone} />
                    <ContactCard title="Email Us" content="hello@coffeestation.com Support 24/7" icon={LuMail} />
                </div>
                <ImageCard src={src} divStyle="map_image_card" imgStyle="map_image_card-img"/>
            </div>
        </section>
    );
}