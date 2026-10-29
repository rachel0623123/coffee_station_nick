import { create } from "zustand";
import { products } from "../shared/data/products";
import { removeItem } from "framer-motion";

interface cartProductsType {
    id: string;
    name: string;
    price: number;
    image: string;
    amount: number;
}

type cartStoreType = {
    cartProducts: cartProductsType[];

    addToCart: (name : string) => void;
    // controlCartProductNum: (x: number) => void;
    increase: (id: string, x: number) => void,
    removeItem: (id: string) => void
};

export const cartStore = create<cartStoreType>((set, get) => ({

    cartProducts: [],

    increase: (id, x) => {

        const item = get().cartProducts.find((p) => p.id === id);
        if (!item) return;

        if (item.amount + x <= 0) {
            get().removeItem(id);
            return;
        }

        set((state) => ({
            cartProducts: state.cartProducts.map((p) => 
                p.id === id ? { ...p, amount: p.amount + x } : p
            ),
        }));
    },

    addToCart: (id) => {
        const product = products.find((p) => p.id === id);
        if (!product) return;

        const exists = get().cartProducts.some((p) => p.id === id);
        if (exists) {
            get().increase(id, 1);
            return;
        }

        set((state) => ({
            cartProducts: [
                ...state.cartProducts,
                { id: product.id, name: product.name, price: product.price, image: product.image, amount: 1 },
            ],
        }));
    },

    removeItem: (id) => {
        set((state) => ({
            cartProducts: state.cartProducts.filter((p) => p.id !== id),
        }));
    },
}));