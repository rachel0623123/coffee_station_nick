export const AmbienceCard = ({src} : {src : string}) => {
    return (
        <div className="w-[350px] h-[400px] relative">
            <div className="w-[100%] h-[100%] hover:scale-105 rounded-card p-3.5 border-1 border-coffee-200 shadow-xl transition-all duration-500">
                <img className="w-full h-full rounded-card object-cover" 
                    src={src} alt="img"/>
                <div className="w-full h-full rounded-card hover:bg-black/10 transition-all duration-500 absolute top-0 left-0"></div>
            </div>
        </div>
    );
}