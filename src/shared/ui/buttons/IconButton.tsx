import type { IconType } from "react-icons";

export const IconButton = ({content, className, icon: Icon,}: {content: string, className: string, icon: IconType}) => {
  return (
    <button className={className}>
      <Icon />
      <p className="ml-2">{content}</p>
    </button>
  );
};