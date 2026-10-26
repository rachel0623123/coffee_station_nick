import { ambience } from "../../data/ambience";
import { AmbienceCard } from "../card/AmbienceCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const AmbienceSection = () => {
    return (
        <section className="w-full m-auto py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-20 text-center relative z-10">
                <p className="text-coffee-600 font-bold uppercase tracking-[0.3em] text-sm1Txt mb-4">The Experience</p>
                <h2 className="text-bgTtl font-serif font-bold text-coffee-900 mb-6 italic">
                    Our
                    <span className="not-italic"> Ambience</span>
                </h2>
                <p className="text-coffee-800/70 max-w-xl mx-auto font-medium text-mdTxt">A sanctuary crafted for focus, connection, and the perfect brew. <br />
                    Every corner tells a story of warmth.</p>
            </div>

            <div className="flex gap-6 py-4">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    spaceBetween={24}
                    loop={true}
                    freeMode={true}
                    speed={6000}
                    autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    allowTouchMove={true}
                    className="mySwiper py-10"
                    style={{ "--swiper-wrapper-transition-timing-function": "linear" } as React.CSSProperties}
                >
                    {[...ambience, ...ambience].map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="!w-auto !py-10">
                                <AmbienceCard src={item.src} key={index} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="container mx-auto px-6 mt-16 flex flex-wrap justify-center gap-24 text-coffee-900/40 font-serif italic text-bgTxt">
                <span>"Cozy corners"</span>
                <span>"Natural light"</span>
                <span>"Artisan details"</span>
                <span>"Warm spirits"</span>
            </div>
        </section>
    );
}