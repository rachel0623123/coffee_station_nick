import { Button } from "../buttons/Button";
import heroSrc from "../../../assets/images/products/tea (3).avif";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <section className="w-full h-[110vh] flex flex-col items-center">
            <div className="w-mdScreen h-[600px] m-auto px-5 flex items-center justify-between">
                <div className="w-[480px] text-left space-y-8 relative">
                    <h1 className=" text-hgTtl font-bold font-serif leading-[100px]">Sip the Extraordinary</h1>
                    <p className="text-bgTxt text-coffee-800/80 font-medium leading-relaxed">Experience coffee crafted with passion, served in liquid glass elegance. Warmth in every cup.</p>
                    <div className="flex flex-row gap-4 justify-start pt-4">
                        <Link to="/reserve">
                            <Button content="Order Now" className="flRound_dark_btn" />
                        </Link>
                        <Link to="/menu">
                            <Button content="View Full Menu" className="flRound_light_btn" />
                        </Link>
                    </div>
                </div>
                <div className="w-[400px] h-[480px] relative">
                    <div className="w-[400px] h-[480px] rounded-card-lg bg-coffee-100/70  absolute top-0 left-0 flex justify-center items-center border-1 border-white/20"></div>
                    <div className="w-[380px] h-[450px] rounded-card-lg bg-coffee-100/70  absolute top-[15px] left-[10px] flex justify-center items-center border-1 border-white/40"></div>
                    <img src={heroSrc} alt="heroImg" className="w-[310px] h-[310px] absolute top-[85px] left-[45px] object-cover rounded-full border-5 border-cream"/>
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