import style from "./ControlPanel.module.css";
import {GameControls} from "../../components/GameControls/GameControls";
import {DisplayPanel} from "../DisplayPanel/DisplayPanel";


export const ControlPanel = () => {

  return (
    <div className={style.container}>
      <div className={style.gameControlsContainer}>
        <GameControls />
      </div>
      <div className={style.diplayControlsContainer}>
        <DisplayPanel />
      </div>
    </div>
  )
}
