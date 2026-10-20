import { FontCard } from "../FontBox";

const fontList = ["font-sans", "font-serif"];

export const FontSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5">Fonts</h2>
            <div className="flex">
                {fontList.map((item, index) => {
                    return (
                        <FontCard key={index} fontFamily={item}/>
                    );
                })}
            </div>
        </section>
    );
}