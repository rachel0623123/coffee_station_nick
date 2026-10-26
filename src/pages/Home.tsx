import { AmbienceSection } from "../shared/ui/home/AmbienceSection";
import { CommunityLoveSection } from "../shared/ui/home/CommunityLoveSection";
import { CTASection } from "../shared/ui/home/CTASection";
import { HeroSection } from "../shared/ui/home/HeroSection";
import { TopSellingSection } from "../shared/ui/home/TopSellingSection";

export const Home = () => {
    return (
        <main>
            <HeroSection />
            <TopSellingSection />
            <AmbienceSection />
            <CommunityLoveSection />
            <CTASection />
        </main>
    );
}