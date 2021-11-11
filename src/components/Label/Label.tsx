import style from "./Label.module.css";
import cx from "classnames";

export interface ILabelProps {
  side?: "blue" | "red";
  className?: string;
  [key: string]: any;
}

export const Label = ({side, className, children, ...props}: ILabelProps) => {
  return (
    <p
      {...props}
      className={cx([style.container, className, side && (side === "blue" ? style.blue : style.red)])}>
      {children}
    </p>
  )
}
