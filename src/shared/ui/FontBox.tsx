export const FontBox = ({fontFamily} : {fontFamily : string}) => {
    return (
        <div className={"w-[250px] shadow-lg border-5 border-coffee-900 text-coffee-900 rounded-xl font-bold px-5 py-2 text-center mr-5 text-smTtl " + fontFamily}>
            {fontFamily}
        </div>
    );
};