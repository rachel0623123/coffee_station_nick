import { BiSolidQuoteRight } from "react-icons/bi";

export const CustomerCard = ({name, job, content, avatar} : {name: string, job: string, content: string, avatar: string}) => {
    return (
        <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-full glass-premium p-6 sm:p-8 rounded-[24px] sm:rounded-3xl relative border border-white/30 hover:bg-white/10 transition-colors pointer-events-none md:pointer-events-auto select-none">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 bg-coffee-800 rounded-full p-2.5 sm:p-3 shadow-lg">
                <BiSolidQuoteRight className="text-white fill-current"/>
            </div>
            <p className="text-coffee-900/90 italic mb-5 sm:mb-6 mt-3 sm:mt-4 leading-relaxed font-medium text-base sm:text-lg">{content}</p>
            <div className="flex">
                <img className="w-[50px] h-[50px] mr-4 rounded-full object-cover border-2 border-white/50"
                    src={avatar} alt={name} />
                <div>
                    <h5 className="font-bold text-coffee-900">{name}</h5>
                    <p className=" text-sm2Txt text-coffee-700 uppercase tracking-wide font-semibold">{job}</p>
                </div>
            </div>
        </div>
    );
}