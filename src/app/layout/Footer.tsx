import { Link } from "react-router-dom";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";
import { Button } from "../../shared/ui/buttons/Button";

const links = [LuInstagram, LuFacebook, LuTwitter];
const navItems = [
    {
        content: "Home",
        path: "/" 
    },
    {
        content: "About Us",
        path: "/about" 
    },
    {
        content: "Our Menu",
        path: "/menu" 
    },
    {
        content: "Contact",
        path: "/contact" 
    },
];

export const Footer = () => {
    return (
        <footer className="bg-coffee-950 text-coffee-100 pt-20 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-smTtl font-bold font-serif text-white flex items-center gap-2">
                            Coffee
                            <span className="text-coffee-400">'station</span>
                        </h3>
                        <p className="text-coffee-200/60 leading-relaxed font-medium max-w-xs mt-6">Elevating your daily ritual with handcrafted excellence.</p>
                        <div className="flex gap-4 mt-6">
                            {links.map((Icon, index) => {
                                return (
                                    <Link to="#" key={index} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 group hover:scale-110 transition-all duration-300">
                                        <Icon className="text-bgTxt group-hover:text-terracotta transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm1Txt font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">Navigation</h4>
                        <ul className="space-y-4">
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} className="text-sm sm:text-base text-coffee-100/70 hover:text-white transition-colors flex items-center gap-2 group">
                                            <span className="w-0 h-px bg-terracotta group-hover:w-4 transition-all"></span>
                                            {item.content}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm1Txt font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">OUR SPACE</h4>
                        <ul className="space-y-4 text-coffee-100/70 font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-terracotta mt-1">•</span>
                                <span>PDPM IIITDM JABALPUR <br/> M.P, India</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-terracotta mt-1">•</span>
                                <span>hello@coffeestation.com <br /> +91 9999999999</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm1Txt font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">Join the Club</h4>
                        <p className="text-coffee-100/60 text-smTxt mb-6 font-medium">Subscribe for secret menu previews and brewing tips.</p>
                        <div className="flex gap-2">
                            <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-smTxt 
                                focus:outline-none focus:ring-1 focus:ring-terracotta w-full" placeholder="Your email"/>
                            <Button content="Host" className="mdRound_light_btn-search"/>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center gap-4 text-smTxt text-coffee-100/40">
                    <p>© 2026 Coffee'station. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}