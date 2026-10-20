import { BadgeSection } from "../components/designSystem/BadgeSection";
import { BtnSection } from "../components/designSystem/BtnSection";
import { CardSection } from "../components/designSystem/CardSection";
import { ColorSection } from "../components/designSystem/ColorSection";
import { FontSection } from "../components/designSystem/FontSection";

export const DesignSystem = () => {
    return (
        <main className="p-10 bg-blue-400 min-h-[100vh]">
            <h1 className="text-lgTtl text-white mb-5">Design System</h1>
            <ColorSection/>
            <FontSection />
            <BtnSection />
            <BadgeSection />
            <CardSection />
        </main>
    );
}