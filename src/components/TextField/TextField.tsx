import style from "./TextField.module.css";
import {TextField as MaterialTextField} from "@mui/material";
import cx from "classnames";
import {StandardTextFieldProps} from "@mui/material/TextField/TextField";

export interface ITextFieldProps extends StandardTextFieldProps {
  value: string;
  side?: "blue" | "red";
  className?: string;
  [key: string]: any;
}

export const TextField = ({value, side, className, ...props}: ITextFieldProps) => {
  return (
    <MaterialTextField
      {...props}
      value={value}
      className={cx([style.container, className, side && (side === "blue" ? style.blue : style.red)])}>
    </MaterialTextField>
  )
}
