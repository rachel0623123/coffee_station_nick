import type { IconType } from "react-icons";

export const CtrlBtn = ({className, icon: Icon,}: {className: string, icon: IconType}) => {
  return (
    <button className={className}>
      <Icon />
    </button>
  );
};