import { StaffSection } from "../shared/ui/about/StaffSection";
import { StorySection } from "../shared/ui/about/StorySection";

export const About = () => {
    return (
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative min-h-screen">
            <StorySection />
            <StaffSection />
        </main>
    );
}