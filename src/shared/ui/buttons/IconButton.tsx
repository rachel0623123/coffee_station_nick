import type { IconType } from "react-icons";

export const IconButton = ({content, className, icon: Icon, onClick}: {content: string, className: string, icon: IconType, onClick?: () => void}) => {
  return (
    <button className={className} onClick={onClick}>
      <Icon className="group-hover/btn:rotate-90 transition-transform duration-300"/>
      <p className="ml-2">{content}</p>
    </button>
  );
};