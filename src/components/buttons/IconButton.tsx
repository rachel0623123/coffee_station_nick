import type { IconType } from "react-icons";

type IconButtonProps = {
  content: string;
  className: string;
  icon: IconType;
};

export const IconButton = ({
  content,
  className,
  icon: Icon,
}: IconButtonProps) => {
  return (
    <button className={className}>
      <Icon />
      <p className="ml-2">{content}</p>
    </button>
  );
};