import { ColorBox } from "../ColorBox";

const colorList = [
    "bg-coffee-50",
    "bg-coffee-100",
    "bg-coffee-200",
    "bg-coffee-300",
    "bg-coffee-400",
    "bg-coffee-500",
    "bg-coffee-600",
    "bg-coffee-700",
    "bg-coffee-800",
    "bg-coffee-900",
    "bg-coffee-950",
    "bg-primary",
    "bg-soft-coffee",
    "bg-cream",
    "bg-beige",
    "bg-terracotta",
];

export const ColorSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5 text-coffee-900">Colors</h2>
            <div className="flex bg-beige rounded-full px-20 py-10  flex-wrap">
                {colorList.map((item, index) => {
                    return (
                        <div className="mr-8 flex flex-col items-center" key={index}>
                            <ColorBox key={index} color={item}/>
                            <p className="mt-5">{item}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}