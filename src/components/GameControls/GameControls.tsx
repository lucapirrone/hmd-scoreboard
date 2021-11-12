import {useGameControls} from "../../hooks/useGameControls";
import style from "./GameControls.module.css";
import {Button} from "../Button/Button";
import {TextField} from "../TextField/TextField";
import {TextField as MaterialTextField} from "@mui/material";
import {Label} from "../Label/Label";
import {IGameState} from "../../type";
import {useSelector} from "react-redux";

export const GameControls = () => {
  const gameState: IGameState = useSelector((state: IGameState) => state);
  const {
    redPlayerControls,
    bluePlayerControls,
    gameSettingsControls,
    endGame,
    setWinner,
    startTime,
    pauseTime,
    saveDefault,
    restoreDefault
  } = useGameControls();


  return <div className={style.container}>
    <div className={style.row}>
      <TextField
        className={style.textTitle}
        label="Titolo gara"
        value={gameState.gameSettings.title}
        onChange={(event) => {
          gameSettingsControls.updateTitle(event.target.value);
        }}
        side="blue"
      />
    </div>
    <div className={style.row}>
      <Button
        text={gameState.gameSettings.playing ? "Pausa" : "Avvia"}
        onClick={() => {
          gameState.gameSettings.playing ? pauseTime() : startTime();
        }}
        variant="outlined"
      />
      <MaterialTextField
        value={gameState.gameSettings.missingSeconds}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => {
          gameSettingsControls.updateTime(parseInt(event.target.value));
        }}
        disabled={gameState.gameSettings.playing}
        variant="standard"
      />
      <Button
        text="Fine"
        onClick={() => {
          endGame();
        }}
        variant="contained"
      />
    </div>


    <div className={style.row}>
      <p className={style.textSetting}>Vincitore</p>
      <Button
        text="Rosso"
        onClick={() => {
          setWinner("red");
        }}
        variant="contained"
        side="red"
        disabled={!gameState.gameSettings.finished}
        alt={"test"}
      />
      <Button
        text="Blu"
        onClick={() => {
          setWinner("blue");
        }}
        variant="contained"
        side="blue"
        disabled={!gameState.gameSettings.finished}
      />
    </div>


    <div className={style.row}>
      <TextField
        className={style.textTeam}
        label="Nome angolo blu"
        value={gameState.bluePlayer.name}
        onChange={(event) => {
          bluePlayerControls.updateName(event.target.value);
        }}
        side="blue"
      />
      <p className={style.textSetting}>Nome</p>
      <TextField
        className={style.textTeam}
        label="Nome angolo rosso"
        value={gameState.redPlayer.name}
        onChange={(event) => {
          redPlayerControls.updateName(event.target.value);
        }}
        side="red"
      />
    </div>
    <div className={style.row}>
      <Button
        text="-"
        onClick={() => {
          bluePlayerControls.subtractScore();
        }}
        variant="outlined"
        side="blue"
      />
      <Button
        text="+"
        onClick={() => {
          bluePlayerControls.addScore();
        }}
        variant="outlined"
        side="blue"
      />
      <Label className={style.textSetting}>Score</Label>
      <Button
        text="+"
        onClick={() => {
          redPlayerControls.addScore();
        }}
        variant="outlined"
        side="red"
      />
      <Button
        text="-"
        onClick={() => {
          redPlayerControls.subtractScore();
        }}
        variant="outlined"
        side="red"
      />
    </div>
    <div className={style.row}>
      <Button
        text="-"
        onClick={() => {
          bluePlayerControls.subtractWarning();
        }}
        variant="outlined"
        side="blue"
      />
      <Button
        text="+"
        onClick={() => {
          bluePlayerControls.addWarning()
        }}
        variant="outlined"
        side="blue"
      />
      <Label className={style.textSetting}>Warning</Label>
      <Button
        text="+"
        onClick={() => {
          redPlayerControls.addWarning();
        }}
        variant="outlined"
        side="red"
      />
      <Button
        text="-"
        onClick={() => {
          redPlayerControls.subtractWarning();
        }}
        variant="outlined"
        side="red"
      />
    </div>
    <div className={style.row}>
      <Button
        text="-"
        onClick={() => {
          bluePlayerControls.subtractExit();
        }}
        variant="outlined"
        side="blue"
      />
      <Button
        text="+"
        onClick={() => {
          bluePlayerControls.addExit()
        }}
        variant="outlined"
        side="blue"
      />
      <Label className={style.textSetting}>Exit</Label>
      <Button
        text="+"
        onClick={() => {
          redPlayerControls.addExit();
        }}
        variant="outlined"
        side="red"
      />
      <Button
        text="-"
        onClick={() => {
          redPlayerControls.subtractExit();
        }}
        variant="outlined"
        side="red"
      />
    </div>
    <div className={style.row}>
      <Button
        text="Salva Impostazioni"
        onClick={() => {
          saveDefault();
        }}
        variant="outlined"
        side="red"
      />
      <Button
        text="Reset Impostazioni"
        onClick={() => {
          restoreDefault();
        }}
        variant="outlined"
        side="red"
      />
    </div>
  </div>
}
