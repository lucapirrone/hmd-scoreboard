import style from "./Button.module.css";
import MaterialButton from '@mui/material/Button';
import cx from "classnames";

export interface IButtonProps {
  text: string;
  side?: "blue" | "red";
  className?: string;
  onClick(): void;
  [key: string]: any;
}

export const Button = ({text, onClick, className, side, ...props}: IButtonProps) => {
  return (
    <MaterialButton
      {...props}
      disableElevation
      className={cx([style.container, className, side && (side === "blue" ? style.blue : style.red)])}
      onClick={onClick}>
      {text}
    </MaterialButton>
  )
}
