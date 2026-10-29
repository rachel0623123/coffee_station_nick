import { create } from "zustand";
import { products } from "../shared/data/products";

interface cartProductsType {
    id: string;
    name: string;
    price: number;
    image: string;
    amount: number;
}

type cartStoreType = {
    cartProducts: cartProductsType[];
    totalPrice: number;
    totalNum: number;
    addToCart: (id : string) => void;
    increase: (id: string, x: number) => void,
    removeItem: (id: string) => void
};

export const cartStore = create<cartStoreType>((set, get) => ({

    cartProducts: [],

    totalPrice: 0,

    totalNum: 0,

    increase: (id, x) => {

        const item = get().cartProducts.find((p) => p.id === id);
        if (!item) return;

        if (item.amount + x <= 0) {
            get().removeItem(id);
            return;
        }

        set((state) => ({
            totalPrice: state.totalPrice + x * item.price,
            totalNum: state.totalNum + x,
            cartProducts: state.cartProducts.map((p) => {
                return p.id === id ? { ...p, amount: p.amount + x } : p
            }
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
            totalPrice: state.totalPrice + product.price,
            totalNum: state.totalNum + 1,
            cartProducts: [
                ...state.cartProducts,
                { id: product.id, name: product.name, price: product.price, image: product.image, amount: 1 },
            ],
        }));
    },

    removeItem: (id) => {
        const product = get().cartProducts.find((p) => p.id === id);
        if (!product) return;

        set((state) => ({
            totalPrice: state.totalPrice - product.price * product.amount,
            totalNum: state.totalNum - product.amount,
            cartProducts: state.cartProducts.filter((p) => p.id !== id),
        }));
    },

}));