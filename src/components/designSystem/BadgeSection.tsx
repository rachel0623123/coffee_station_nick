import { Badge } from "../badges/Badge";
import { IconBadge } from "../badges/IconBadge";
import { GoStarFill } from "react-icons/go";
import { LuSparkles } from "react-icons/lu";

export const BadgeSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5">Badges</h2>
            <div className="flex flex-wrap bg-coffee-100 p-4 rounded-2xl">
                <div className="ds_section_content">
                    <Badge content="3" className="icon_badge"/>
                    <p>IconBadge</p>
                </div>
                <div className="ds_section_content">
                    <Badge content="BEST SELLER" className="bestSeller_badge"/>
                    <p>bestSeller_badge</p>
                </div>
                <div className="ds_section_content">
                    <Badge content="$3.80" className="product_price"/>
                    <p>product_price</p>
                </div>
                <div className="ds_section_content">
                    <IconBadge content="4.9" className="fav_badge" icon={GoStarFill}/>
                    <p>fav_badge</p>
                </div>
                <div className="ds_section_content">
                    <IconBadge content="Premium Experience" className="flRound_light_badge-icon" icon={LuSparkles}/>
                    <p>flRound_light_badge-icon</p>
                </div>

            </div>
        </section>
    );
}