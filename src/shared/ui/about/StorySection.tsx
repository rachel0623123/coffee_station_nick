import src from "../../../assets/images/photo-1495474472287-4d71bcdd2085.avif";
import { Badge } from "../badges/Badge";
import { ImageCard } from "../card/ImageCard";

export const StorySection = () => {
    return (
        <section className="pt-12">
            <div className="w-lgScreen mx-auto px-6">
                <div className="text-center mb-24">
                    <p className="text-terracotta font-bold uppercase tracking-[0.4em] text-sm1Txt mb-4 block">Our Heritage</p>
                    <h1 className="text-lgTtl font-bold text-coffee-900 mb-8 font-serif italic">
                        The <span className="not-italic">Story</span>
                    </h1>
                    <p className="text-bgTxt text-coffee-800/70 max-w-2xl mx-auto font-medium leading-relaxed">From a solitary bean to a shared sanctuary. We've been crafting moments of comfort and connection since our first pour.</p>
                </div>
                <div className="grid grid-cols-2 gap-16 items-center mb-32">
                    <ImageCard src={src} divStyle="about_image_card" imgStyle="about_image_card-img"/>
                    <div>
                        <Badge content="Established 2026" className="inline-flex items-center gap-3 px-4 py-2 bg-terracotta text-white rounded-full text-sm1Txt font-bold uppercase tracking-widest w-fit"/>
                        <h2 className="text-Ttl font-bold text-coffee-900 font-serif leading-tight mt-9">
                            Crafted with <span className="text-terracotta italic font-normal">Passion</span> & Precision
                        </h2>
                        <div className="space-y-6 text-coffee-800/80 text-mdTxt mt-8 leading-relaxed font-medium">
                            <p>Coffee'station began with a simple yet ambitious mission: to redefine the daily coffee ritual. We saw an opportunity to blend the warmth of traditional café culture with a modern, premium aesthetic.</p>
                            <p>Our beans are curated from sustainable micro-lots across the globe, each roasted to highlight its unique terroir. But more than the beans, we value the community we've built, one cup at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}