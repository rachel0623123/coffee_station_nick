export const CartNumBadge = ({num} : {num : number}) => {
    return (
        <div className={`w-5 h-5 bg-terracotta text-white text-sm3Txt font-bold rounded-lg flex items-center justify-center 
            shadow-lg border-2 border-white/50  absolute -top-0.5 -right-0.5 ${num === 0 ? `hidden` : ``}`}>
            {num}
        </div>
    );
}