import type { IconType } from "react-icons";

export const ContactCard = ({title, content, icon: Icon,}: {title: string, content: string, icon: IconType;}) => {
  return (
    <div className="w-[250px] h-[270px] p-10 rounded-card text-center flex flex-col items-center hover:bg-white/40 transition-all duration-500 group border-1 border-white/20 shadow-xl ">
        <div className="p-5 bg-coffee-900 text-white rounded-3xl mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-lg text-hgTxt">
            <Icon />
        </div>
        <h3 className="text-lgTxt font-serif font-bold text-coffee-900 mb-3">{title}</h3>
        <p className="text-coffee-800/60 font-medium leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
};
