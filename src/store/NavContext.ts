import { createContext } from "react";

export type NavItem = { content: string; path: string };

export const NavContext = createContext<NavItem[]>([]);