import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { CustomerCard } from "../card/CustomerCard";
import { customer } from "../../data/customer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const CommunityLoveSection = () => {
    return (
        <section className="py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-smTtl sm:text-Ttl md:text-mdTtl font-bold text-coffee-900 mb-4 font-serif">Community Love</h2>
                    <p className="text-coffee-800/60 flex items-center justify-center gap-2">
                        <LuArrowLeft />
                        <span className="text-coffee-800/60 flex items-center justify-center gap-2 text-smTxt sm:text-base">Drag to explore</span>
                        <LuArrowRight />
                    </p>
                </div>

                <div className="flex gap-6 sm:gap-8 w-full pt-10 sm:pt-12 pb-4 px-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        breakpoints={{
                            640:  { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="mySwiper cursor-pointer"
                    >
                        {customer.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="!py-10">
                                    <CustomerCard name={item.name} job={item.job} content={item.content} avatar={item.image} key={index} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}