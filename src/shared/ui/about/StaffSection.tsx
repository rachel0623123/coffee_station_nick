import { staffs } from "../../data/staffs";
import { ImageCard } from "../card/ImageCard";

export const StaffSection = () => {
    return (
        <section className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-smTtl sm:text-Ttl font-bold text-coffee-900 font-serif mb-4 italic">
                    The <span className="not-italic">Artisans</span>
                </h2>
                <p className="text-coffee-800/60 font-medium text-smTxt sm:text-base">Meet the passionate minds behind your perfect cup.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {staffs.map((item) => {
                    return (
                        <div className="text-center group" key={item.name}>
                            <ImageCard src={item.avatar} divStyle="staff_image_card" imgStyle="staff_image_card-img"/>
                            <h3 className="text-bgTxt sm:text-lgTxt font-bold text-coffee-900 mb-1">{item.name}</h3>
                            <p className="text-terracotta font-bold uppercase tracking-widest text-sm1Txt">{item.position}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}