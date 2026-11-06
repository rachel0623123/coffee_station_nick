import { LuSparkles, LuClock4, LuUser, LuCalendar, LuCheck } from "react-icons/lu";
import { IconBadge } from "../badges/IconBadge";
import { Button } from "../buttons/Button";
import { useState } from "react";

export const BookingForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [formData, setFormData] = useState({name: "", date: "", guests: "2 People", time: "09:00 AM"})
    
    return (
        <section className="min-h-screen relative overflow-hidden flex items-center justify-center mt-8 sm:mt-12">

            <div className="container mx-auto max-w-6xl relative z-10">

                <div className="rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2 min-h-0 sm:min-h-[600px] border border-white/20 relative">
                
                    <div className="relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-coffee-900/5">
                        <div className="relative z-10">
                            <IconBadge content="Premium Experience" className="flRound_light_badge-icon" icon={LuSparkles}/>
                            <h2 className="text-smTtl sm:text-Ttl md:text-mdTtl lg:text-bgTtl font-serif font-bold text-coffee-900 leading-tight mb-3 sm:mb-4">
                                Reserve Your <br />
                                <span className="text-primary italic">Moment</span>
                            </h2>
                            <p className="sm:text-mdTxt text-coffee-800/80 max-w-sm sm:max-w-md">Secure the best spot in the house. Whether for a quiet coffee or a lively brunch, we're ready for you.</p>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 text-coffee-900 font-medium bg-white/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10">
                            <p className="w-8 h-8 sm:w-10 sm:h-10 bg-white/50 rounded-full flex items-center justify-center text-bgTxt text-coffee-900">
                                <LuClock4 />
                            </p>
                            <div>
                                <p className="text-sm1Txt sm:text-smTxt text-coffee-600 uppercase font-bold tracking-wider">Opening Hours</p>
                                <p className="text-smTxt sm:text-base">Mon - Sun: 7am - 9pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 md:p-12 bg-white/5 lg:bg-transparent relative border-t lg:border-t-0 border-white/10">

                        <form className={`${isFormVisible ? "" : "hidden"} space-y-4 sm:space-y-6 h-full flex flex-col justify-center`} onSubmit={(e) => {setIsFormVisible(false); e.preventDefault()}}>
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="booking_form_label" htmlFor="name">Name</label>
                                <div className="relative group">
                                    <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5"/>
                                    <input 
                                        type="text" 
                                        placeholder="Example Name" 
                                        id="name" value={formData.name} 
                                        onChange={(e) => {setFormData({...formData, name: e.target.value})}} 
                                        required
                                        autoComplete="off"
                                        className="w-full bg-white/40 border-1 border-white/30 rounded-xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-4 text-smTxt sm:text-base text-coffee-900 placeholder:text-coffee-400/70 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="booking_form_label" htmlFor="date">Date</label>
                                    <div className="relative group">
                                        <LuCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-500 group-focus-within:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                                        <input 
                                            type="date" 
                                            value={formData.date}
                                            id="date"
                                            onChange={(e) => {setFormData({...formData, date: e.target.value})}}
                                            required
                                            className="w-full bg-white/40 border-1 border-white/30 rounded-xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-4 text-smTxt sm:text-base text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all"/>
                                    </div>
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="booking_form_label" htmlFor="guests">Guests</label>
                                    <select 
                                        onChange={(e) => {setFormData({...formData, guests: e.target.value})}} 
                                        value={formData.guests}
                                        className="w-full bg-white/40 border border-white/30 rounded-xl py-4 px-4 text-coffee-900 focus:bg-white/70 focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer"
                                        id="guests"
                                    >
                                        <option>1 Person</option>
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4 People</option>
                                        <option>5+ People</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="booking_form_label" htmlFor="time">Preferred Time</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3" id="time">
                                    {["09:00 AM","01:00 PM","06:00 PM"].map((item, index) => {
                                        return (
                                            <Button 
                                                content={item} 
                                                className={formData.time === item ? "mdRound_dark_btn-time" : "mdRound_light_btn-time"}  
                                                onClick={() => {setFormData({...formData, time: item});}}
                                                type="button"
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <Button 
                                content="Confirm Reservation"
                                className="mdRound_dark_btn-bigSize"
                                type="submit"
                            />
                        </form>

                        <div className={`${isFormVisible ? "hidden" : ""} h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 py-10 sm:py-0`}>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center text-mdTtl text-white shadow-lg shadow-green-500/30">
                                <LuCheck className="w-12 h-12"/>
                            </div>
                            <div>
                                <h3 className="text-lgTxt sm:text-smTtl font-serif font-bold text-coffee-900 mb-2">Table Reserved!</h3>
                                <p className="text-coffee-800/70 text-smTxt sm:text-base">Confirmation sent to your email.</p>
                            </div>
                            <Button content="Book Another Table" className="flRound_dark_btn text-terracotta mt-6" onClick={() => {setFormData({name: "", date: "", guests: "2 People", time: "09:00 AM"}); setIsFormVisible(true);}}/>
                        </div>
                        
                    </div>


                </div>
            </div>
        </section>
    );
}