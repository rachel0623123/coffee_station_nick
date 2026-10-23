import { BadgeSection } from "../shared/ui/designSystem/BadgeSection";
import { BtnSection } from "../shared/ui/designSystem/BtnSection";
import { CardSection } from "../shared/ui/designSystem/CardSection";
import { ColorSection } from "../shared/ui/designSystem/ColorSection";
import { FontSection } from "../shared/ui/designSystem/FontSection";

export const DesignSystem = () => {
    return (
        <main className="w-lgScreen min-h-[100vh]">
            <h1 className="text-lgTtl text-coffee-900 my-10">Design <span className="italic font-serif text-coffee-600">System</span></h1>
            <ColorSection/>
            <FontSection/>
            <BtnSection/>
            <BadgeSection/>
            <CardSection/>
        </main>
    );
}