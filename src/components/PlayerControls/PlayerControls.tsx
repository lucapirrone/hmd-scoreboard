import style from "./PlayerControls.module.css";
import {Label} from "../Label/Label";
import {IPlayerState} from "../../type";

export interface IPlayerControlsProps {
  side: 'red' | 'blue',
  state: IPlayerState
}

export const PlayerControls = ({side, state}: IPlayerControlsProps) => {
  return (
    <div className={style.container}>
      <Label side={side} className={style.name}>
        {state.name}
      </Label>

      <Label side={side} className={style.score}>
        {state.score}
      </Label>

      <div className={style.extraContainer}>
        <div className={style.extraItemContainer}>
          <Label side={side} className={style.extraItemTitle}>WA</Label>
          <Label side={side} className={style.extraItemValue}>{state.warning}</Label>
        </div>
        <div className={style.extraItemContainer}>
          <Label side={side} className={style.extraItemTitle}>EX</Label>
          <Label side={side} className={style.extraItemValue}>{state.exits}</Label>
        </div>
      </div>
    </div>
  )
}
