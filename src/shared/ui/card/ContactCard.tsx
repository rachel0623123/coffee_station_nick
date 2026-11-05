import type { IconType } from "react-icons";

export const ContactCard = ({title, content, icon: Icon,}: {title: string, content: string, icon: IconType;}) => {
  return (
    <div className="p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] text-center flex flex-col items-center hover:bg-white/40 transition-all duration-500 group border-1 border-white/20 shadow-xl">
        <div className="p-4 sm:p-5 bg-coffee-900 text-hgTxt text-white rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
            <Icon />
        </div>
        <h3 className="text-bgTxt sm:text-lgTxt font-serif font-bold text-coffee-900 mb-2 sm:mb-3">{title}</h3>
        <p className="text-smTxt sm:text-base text-coffee-800/60 font-medium leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
};
