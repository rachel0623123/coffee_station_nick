export const AmbienceCard = ({src} : {src : string}) => {
    return (
        <div className="w-[180px] sm:w-[280px] md:w-[350px] h-[220px] sm:h-[320px] md:h-[400px] shrink-0 border-1 border-white/20 p-3 sm:p-4 rounded-[24px] sm:rounded-[32px] shadow-xl relative group overflow-hidden">
            <img className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px]" 
                src={src} alt="img"/>
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[32px]"></div>
        </div>
    );
}