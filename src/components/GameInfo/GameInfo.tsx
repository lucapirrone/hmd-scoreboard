import style from "./GameInfo.module.css";
import {displaySeconds} from "../../utils/utils";
import {IGameSettingsState} from "../../type";

export interface IGameInfoProps {
  state: IGameSettingsState
}

export const GameInfo = ({state}: IGameInfoProps) => {
  const {minutes: missingMinutes, seconds: missingSeconds} = displaySeconds(state.missingSeconds);
  return (
    <div className={style.container}>
      <img src="/hmd.png" className={style.hmdLogo} alt="Logo"/>
      <div className={style.time}>
        <p className={style.missingMinutes}>{missingMinutes}</p>
        <p className={style.colon}>:</p>
        <p className={style.missingSeconds}>{missingSeconds}</p>
      </div>
    </div>
  )
}
