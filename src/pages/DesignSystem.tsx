import { BadgeSection } from "../shared/ui/designSystem/BadgeSection";
import { BtnSection } from "../shared/ui/designSystem/BtnSection";
import { CardSection } from "../shared/ui/designSystem/CardSection";
import { ColorSection } from "../shared/ui/designSystem/ColorSection";
import { FontSection } from "../shared/ui/designSystem/FontSection";

export const DesignSystem = () => {
    return (
        <main className="p-10 bg-cream min-h-[100vh]">
            <h1 className="text-lgTtl text-coffee-900 mb-5">Design System</h1>
            <ColorSection/>
            <FontSection/>
            <BtnSection/>
            <BadgeSection/>
            <CardSection/>
        </main>
    );
}