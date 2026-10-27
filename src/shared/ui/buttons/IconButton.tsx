import type { IconType } from "react-icons";

export const IconButton = ({content, className, icon: Icon, onClick}: {content: string, className: string, icon: IconType, onClick?: () => void}) => {
  return (
    <button className={className} onClick={onClick}>
      <Icon />
      <p className="ml-2">{content}</p>
    </button>
  );
};