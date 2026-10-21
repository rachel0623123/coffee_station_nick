export const ColorBox = ({ color } : {color: string}) => {
    return (
        <div className={"w-[50px] h-[50px] border-2 border-primary rounded-full shadow-lg flex justify-center items-center " + color}>
        </div>
    );
};