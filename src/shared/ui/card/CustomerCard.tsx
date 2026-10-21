import { BiSolidQuoteRight } from "react-icons/bi";

export const CustomerCard = ({name, job, content, avatar} : {name: string, job: string, content: string, avatar: string}) => {
    return (
        <div className="min-w-[280px] w-[400px] h-[240px] glass-premium p-8 relative border border-white/30 rounded-[30px] hover:bg-white/10 transition-colors pointer-events-none select-none shadow-2xl">
            <div className="absolute -top-5 left-6 bg-coffee-800 rounded-full p-2.5 shadow-lg text-white text-mdTxt">
                <BiSolidQuoteRight />
            </div>
            <p className="text-coffee-900/90 italic mb-5 mt-3 leading-relaxed font-medium text-mdTxt">{content}</p>
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