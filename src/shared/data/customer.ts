interface customerType {
    name: string,
    content: string,
    job: string
    image: string,
}

export const customer: customerType[] = [
    {
        name: "Rajesh",
        content: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        job: "FREELANCE DESIGNER",
        image: "src/assets/images/customers/customer (1).avif",
    },
    {
        name: "Shubham",
        content: "Best espresso in the city. You can taste the quality of the beans in every sip. Highly recommended!",
        job: "Coffee Enthusiast",
        image: "src/assets/images/customers/customer (2).avif",
    },
    {
        name: "Likhi",
        content: "A hidden gem! The staff is friendly and the pastries are to die for. Love the new booking system.",
        job: "Marketing Manager",
        image: "src/assets/images/customers/customer (3).avif",
    },
    {
        name: "Ajay",
        content: "Fast wifi, great coffee, and the most relaxing vibe in town. My go-to spot for remote work.",
        job: "Software Engineer",
        image: "src/assets/images/customers/customer (4).avif",
    },
    {
        name: "Lisa",
        content: "The aesthetics are just perfect for my feed. And the coffee tastes as good as it looks!",
        job: "Food Blogger",
        image: "src/assets/images/customers/customer (5).avif",
    },
];