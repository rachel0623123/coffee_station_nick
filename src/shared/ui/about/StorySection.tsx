import src from "../../../assets/images/photo-1495474472287-4d71bcdd2085.avif";
import { Badge } from "../badges/Badge";
import { ImageCard } from "../card/ImageCard";

export const StorySection = () => {
    return (
        <section className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 sm:mb-24">
                <p className="text-terracotta font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sm3Txt sm:text-sm1Txt mb-3 sm:mb-4">Our Heritage</p>
                <h1 className="text-Ttl sm:text-bgTtl md:text-lgTtl font-bold text-coffee-900 mb-6 sm:mb-8 font-serif italic">
                    The <span className="not-italic">Story</span>
                </h1>
                <p className="text-mdTxt sm:text-bgTxt text-coffee-800/70 max-w-2xl mx-auto font-medium leading-relaxed">From a solitary bean to a shared sanctuary. We've been crafting moments of comfort and connection since our first pour.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20 sm:mb-32">
                <ImageCard src={src} divStyle="about_image_card" imgStyle="about_image_card-img"/>
                <div className="space-y-6 sm:space-y-8">
                    <Badge content="Established 2026" className="inline-flex items-center gap-3 px-4 py-2 bg-terracotta text-white rounded-full text-sm1Txt font-bold uppercase tracking-widest w-fit"/>
                    <h2 className="text-smTtl sm:text-Ttl font-bold text-coffee-900 font-serif leading-tight">
                        Crafted with <span className="text-terracotta italic font-normal">Passion</span> & Precision
                    </h2>
                    <div className="space-y-4 sm:space-y-6 text-coffee-800/80 sm:text-mdTxt leading-relaxed font-medium">
                        <p>Coffee'station began with a simple yet ambitious mission: to redefine the daily coffee ritual. We saw an opportunity to blend the warmth of traditional café culture with a modern, premium aesthetic.</p>
                        <p>Our beans are curated from sustainable micro-lots across the globe, each roasted to highlight its unique terroir. But more than the beans, we value the community we've built, one cup at a time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}