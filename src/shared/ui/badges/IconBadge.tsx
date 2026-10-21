import type { IconType } from "react-icons";

export const IconBadge = ({content,className,icon: Icon,}: {content: string, className: string, icon: IconType;}) => {
  return (
    <div className={className}>
      <Icon />
      <p>{content}</p>
    </div>
  );
};