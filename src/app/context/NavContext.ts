import { createContext } from "react";

export type navItemType = { content: string; path: string };

export const NavContext = createContext<navItemType[]>([]);