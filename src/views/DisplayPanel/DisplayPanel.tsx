import style from "./DisplayPanel.module.css";
import {PlayerControls} from "../../components/PlayerControls/PlayerControls";
import {GameInfo} from "../../components/GameInfo/GameInfo";
import {Label} from "../../components/Label/Label";
import {useSelector} from "react-redux";
import {IGameState} from "../../type";


export const DisplayPanel = () => {
  const gameState: IGameState = useSelector((state: IGameState) => state);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Label className={style.title}>{gameState.gameSettings.title}</Label>
      </div>
      <div className={style.center}>
        <div className={style.playerControlsContainer}>
          <PlayerControls side='blue' state={gameState.bluePlayer}/>
        </div>
        <div className={style.gameInfoContainer}>
          <GameInfo state={gameState.gameSettings}/>
        </div>
        <div className={style.playerControlsContainer}>
          <PlayerControls side="red" state={gameState.redPlayer}/>
        </div>
      </div>
      <div className={style.footer}>

      </div>
    </div>
  )
}
