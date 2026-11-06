import type { IconType } from "react-icons";

export const HamburgerBtn = ({className, icon: Icon, onClick, ariaLabel, ariaExpanded}: {
    className: string,
    icon: IconType,
    onClick?: () => void,
    ariaLabel: string,
    ariaExpanded: boolean,
}) => {
    return (
        <button className={className} onClick={onClick} aria-label={ariaLabel} aria-expanded={ariaExpanded}>
            <Icon />
        </button>
    );
}