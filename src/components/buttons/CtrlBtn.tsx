import type { IconType } from "react-icons";

type CtrlBtnProps = {
  className: string;
  icon: IconType;
};

export const CtrlBtn = ({
  className,
  icon: Icon,
}: CtrlBtnProps) => {
  return (
    <div className={className}>
      <Icon />
    </div>
  );
};