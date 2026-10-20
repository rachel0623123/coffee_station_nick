export const ColorCard = ({ color } : {color: string}) => {
    return (
        <div className={"w-[50px] h-[50px] bg-coffee-400 rounded-full shadow-lg flex justify-center items-center " + color}>
        </div>
    );
};