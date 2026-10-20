import type { IconType } from "react-icons";

type IconBadgeProps = {
  content: string;
  className: string;
  icon: IconType;
};

export const IconBadge = ({
  content,
  className,
  icon: Icon,
}: IconBadgeProps) => {
  return (
    <div className={className}>
      <Icon />
      <p>{content}</p>
    </div>
  );
};