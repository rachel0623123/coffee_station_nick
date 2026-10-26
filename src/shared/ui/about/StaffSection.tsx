import { staffs } from "../../data/staffs";
import { ImageCard } from "../card/ImageCard";

export const StaffSection = () => {
    return (
        <section className="w-full">
            <div className="w-lgScreen mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-Ttl font-bold text-coffee-900 font-serif mb-4 italic">
                        The <span className="not-italic">Artisans</span>
                    </h2>
                    <p className="text-coffee-800/60 font-medium">Meet the passionate minds behind your perfect cup.</p>
                </div>
                <div className="grid grid-cols-3 gap-12">
                    {staffs.map((item, index) => {
                        return (
                            <div className="text-center" key={index}>
                                <ImageCard src={item.avatar} divStyle="staff_image_card" imgStyle="staff_image_card-img"/>
                                <p className="text-lgTxt font-bold text-coffee-900 mb-1 mt-8">{item.name}</p>
                                <p className="text-terracotta font-bold uppercase tracking-widest text-sm1Txt">{item.position}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}