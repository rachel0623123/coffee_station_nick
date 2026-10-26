import { LuSparkles, LuClock4, LuUser, LuCalendar, LuCheck } from "react-icons/lu";
import { IconBadge } from "../badges/IconBadge";
import { Button } from "../buttons/Button";
import { useState } from "react";

export const BookingForm = () => {
    const [formStatus, setFromStatus] = useState(true);
    const [formData, setFormData] = useState({name: "", date: "", guests: "1 Person", time: "09:00 AM"})
    
    const handleSubmit = () => {
        if (formData.name && formData.date) {
            setFromStatus(false);
        }
    }

    return (
        <section className="min-h-screen py-20 px-6 relative overflow-hidden flex items-center justify-center">
            <div className="w-bgScreen h-[600px] m-auto flex glass-premium rounded-card overflow-hidden shadow-2xl border-1 border-white/20">
                <div className="w-1/2 h-full p-12 flex flex-col justify-between overflow-hidden bg-coffee-900/5 bg-gradient-to-b from-transparent to-coffee-900/20">
                    <div>
                        <IconBadge content="Premium Experience" className="flRound_light_badge-icon" icon={LuSparkles}/>
                        <h2 className="text-bgTtl font-serif font-bold text-coffee-900 leading-tight mb-4">
                            Reserve Your <br />
                            <span className="text-primary italic">Moment</span>
                        </h2>
                        <p className="text-base sm:text-lg text-coffee-800/80 max-w-md">Secure the best spot in the house. Whether for a quiet coffee or a lively brunch, we're ready for you.</p>
                    </div>
                    <div className="flex items-center gap-4 text-coffee-900 font-medium bg-white/30 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                        <p className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center text-coffee-900">
                            <LuClock4 />
                        </p>
                        <div>
                            <p className="text-sm1Txt text-coffee-600 uppercase font-bold tracking-wider">Opening Hours</p>
                            <p className="">Mon - Sun: 7am - 9pm</p>
                        </div>
                    </div>
                </div>
                <form className={`${formStatus ? "" : "hidden"} w-1/2 h-full p-12 bg-white/5 border-1 border-white/10 flex items-center`} onSubmit={handleSubmit}>
                    <div>
                        <div className="space-y-2">
                            <label className="text-smTxt font-bold text-coffee-900 uppercase tracking-wide ml-2">Name</label>
                            <div className="relative group">
                                <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors w-5 h-5"/>
                                <input type="text" placeholder="Example Name"  value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value})}} required 
                                className="w-full bg-white/40 border border-white/30 rounded-xl py-4 pl-12 pr-4 text-coffee-900 placeholder:text-coffee-400/70 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <label className="text-smTxt font-bold text-coffee-900 uppercase tracking-wide ml-2">Date</label>
                                <div className="relative group">
                                    <LuCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors h-5 h-5" />
                                    <input type="date" value={formData.date} onChange={(e) => {setFormData({...formData, date: e.target.value})}} required 
                                    className="w-full bg-white/40 border border-white/30 rounded-xl py-4 pl-12 pr-4 text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"/>
                                </div>
                            </div>
                            <div className="relative group">
                                <label className="text-smTxt font-bold text-coffee-900 uppercase tracking-wide ml-2">Guests</label>
                                <select onChange={(e) => {setFormData({...formData, guests: e.target.value})}}
                                className="w-full bg-white/40 border border-white/30 rounded-xl py-4 px-4 text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2 mt-6">
                            <label className="text-smTxt font-bold text-coffee-900 uppercase tracking-wide ml-2">Preferred Time</label>
                            <div className="grid grid-cols-3 gap-3">
                                {["09:00 AM","01:00 AM","06:00 PM"].map((item, index) => {
                                    return (
                                        <div onClick={() => {setFormData({...formData, time: item});
                                        }} key={index}>
                                            <Button content={item} className={formData.time === item ? "mdRound_dark_btn-time w-full" : "mdRound_light_btn-time w-full"} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-6" onClick={handleSubmit}>
                            <button className="mdRound_dark_btn-bigSize w-full" type="submit">Checkout</button>
                        </div>
                    </div>
                </form>
                <div className={`${formStatus ? "hidden" : ""} w-1/2 h-full p-12 bg-white/5 relative border-1 border-white/10`}>
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-0">
                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                            <LuCheck className="w-12 h-12"/>
                        </div>
                        <div>
                            <h3 className="text-smTtl font-serif font-bold text-coffee-900 mb-2">Table Reserved!</h3>
                            <p className="text-coffee-800/70">Confirmation sent to your email.</p>
                        </div>
                        <div className="mt-6" onClick={() => {setFromStatus(true)}}>
                            <Button content="Book Another Table" className="flRound_dark_btn text-terracotta"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}