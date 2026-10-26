const staffavatars = import.meta.glob<string>(
    "../../assets/images/staffs/*.avif",
    { eager: true, import: "default"}
);

const staffPath = (filename: string) => {
    return staffavatars[`../../assets/images/staffs/${filename}`];
}

interface staffsType {
    name: string,
    position: string,
    avatar: string
}

export const staffs: staffsType[] = [
    {
        name: "Manoj",
        position: "Master Barista",
        avatar: staffPath("Manoj.avif")
    },
    {
        name: "Krish",
        position: "Head Roaster",
        avatar: staffPath("Krish.avif")
    },
    {
        name: "Lisa",
        position: "Pastry Architect",
        avatar: staffPath("Lisa.avif")
    },
]