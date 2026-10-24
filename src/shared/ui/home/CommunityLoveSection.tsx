import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { CustomerCard } from "../card/CustomerCard";
import { customer } from "../../data/customer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const CommunityLoveSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-mdTtl font-bold text-coffee-900 mb-4 font-serif">Community Love</h2>
                <p className="text-coffee-800/60 flex items-center justify-center gap-2">
                    <LuArrowLeft />
                    <span>Drag to explore</span>
                    <LuArrowRight />
                </p>
            </div>

            <div className="w-lgScreen m-auto flex gap-8 overflow-hidden pt-12 pb-4 px-4">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    className="mySwiper cursor-pointer"
                >
                    {customer.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="!w-auto !py-10">
                                <CustomerCard name={item.name} job={item.job} content={item.content} avatar={item.image} key={index} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}