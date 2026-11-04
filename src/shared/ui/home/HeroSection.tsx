import { Button } from "../buttons/Button";
import heroSrc from "../../../assets/images/products/tea (3).avif";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <section className="w-full h-[110vh] flex items-center">
            <div className="container mx-auto px-6 sm:px-8 md:px-20 relative z-10 grid md:grid-cols-2 gap-10 md:gap-8 items-center max-w-6xl">
                <div className="text-center md:text-left space-y-6 md:space-y-8 relative z-20">
                    <h1 className="text-Ttl sm:text-bgTtl md:text-hgTtl font-serif font-bold text-coffee-900 leading-[1.1]">Sip the Extraordinary</h1>
                    <p className="text-base sm:text-lg md:text-xl text-coffee-800/80 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">Experience coffee crafted with passion, served in liquid glass elegance. Warmth in every cup.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 sm:pt-4">
                        <Link to="/reserve">
                            <Button content="Order Now" className="flRound_dark_btn"/>
                        </Link>
                        <Link to="/menu">
                            <Button content="View Full Menu" className="flRound_light_btn"/>
                        </Link>
                    </div>
                </div>
                <div className="relative h-[350px] sm:h-[450px] md:h-[600px] flex items-center justify-center mt-6 md:mt-0">
                    <div className="absolute w-[240px] sm:w-[320px] md:w-[380px] h-[300px] sm:h-[400px] md:h-[480px] rounded-[32px] sm:rounded-[40px] md:rounded-[50px] z-0 border-t border-l border-white/40 shadow-2xl backdrop-blur-lg"></div>
                    <div className="absolute w-[220px] sm:w-[300px] md:w-[350px] h-[280px] sm:h-[380px] md:h-[450px] rounded-[32px] sm:rounded-[40px] md:rounded-[50px] z-0 border-b border-r border-white/40 shadow-xl backdrop-blur-md bg-white/5"></div>
                    <div className="w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img src={heroSrc} alt="heroImg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute top-10 -right-4 bg-coffee-100/70 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg z-20 cursor-pointer border-1 border-white/40">
                        <span className="text-lgTxt">🔥</span>
                        <div>
                            <p className="text-sm2Txt font-bold text-coffee-800 uppercase tracking-wider">Top Pick</p>
                            <p className="font-bold text-coffee-900">Hazelnut Latte</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}