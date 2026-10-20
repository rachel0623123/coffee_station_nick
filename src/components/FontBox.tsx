export const FontCard = ({fontFamily} : {fontFamily : string}) => {
    return (
        <div className={"w-[250px] shadow-lg border-[5px] border-blue-400 rounded-xl px-5 py-2 text-center mr-5 text-smTtl " + fontFamily}>
            {fontFamily}
        </div>
    );
};