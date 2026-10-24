import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";

export const CTASection = () => {

    return (
        <section className="relative overflow-hidden bg-coffee-950 bg-[url(src/assets/images/photo-1501339847302-ac426a4a7cbb.avif)] bg-contain bg-center bg-contain bg-center">
            <div className="text-center py-32 bg-gradient-to-t from-coffee-950 via-coffee-950/60 bg-coffee-950/90">
                <p className="text-terracotta font-bold uppercase tracking-[0.4em] text-sm1Txt mb-6 block">Join Us Today</p>
                <h2 className="text-lgTtl font-serif font-bold mb-8 text-white leading-tight leading-[80px]">
                    Experience the
                    <p className="text-coffee-200 italic font-normal">Perfect Brew</p>
                </h2>
                <p className="text-bgTxt text-coffee-100/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    Book a table today and immerse yourself in an atmosphere where every detail is crafted for your comfort.
                </p>
                <Link to="/reserve">
                    <Button content="Reserve Your Experience" className="mdRound_light_btn-bigSize" />
                </Link>               
            </div>
        </section>
    );
}