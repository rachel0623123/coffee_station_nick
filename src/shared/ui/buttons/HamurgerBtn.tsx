import type { IconType } from "react-icons";

export const HamurgerBtn = ({className, icon: Icon, onClick}: {className: string, icon: IconType, onClick?: () => void}) => {
    return (
        <button className={className} onClick={onClick}>
            <Icon />
        </button>
    );
}