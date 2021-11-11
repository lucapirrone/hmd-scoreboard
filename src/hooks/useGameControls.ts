import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IGameState} from "../type";
import {
  addBlueExit,
  addBlueScore,
  addBlueWarn,
  addRedExit,
  addRedScore,
  addRedWarn,
  endGame,
  pauseGame,
  restoreDefault,
  saveDefault,
  setWinner,
  startGame,
  subBlueExit,
  subBlueScore,
  subBlueWarn,
  subRedExit,
  subRedScore,
  subRedWarn,
  updateBlueName,
  updateGameTime,
  updateGameTitle,
  updateRedName
} from "../store/actionCreators";

export interface IPlayerControls {
  updateName(name: string): void,
  addScore(): void,
  subtractScore(): void,
  addExit(): void,
  subtractExit(): void,
  addWarning(): void,
  subtractWarning(): void,
}

export interface IGameSettingsControls {
  updateTitle(title: string): void,
  updateTime(missingSeconds: number): void,
}

export interface IGameControls {
  redPlayerControls: IPlayerControls,
  bluePlayerControls: IPlayerControls,
  gameSettingsControls: IGameSettingsControls,

  endGame(): void,
  setWinner(winner: "red" | "blue"): void,
  startTime(): void,
  pauseTime(): void,
  saveDefault(): void,
  restoreDefault(): void,
}

export const useGameControls = (): IGameControls => {
  const gameState: IGameState = useSelector((state: IGameState) => state);
  const dispatch = useDispatch()


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameState.gameSettings.playing) {
        dispatch(updateGameTime(gameState.gameSettings.missingSeconds-1));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [gameState]);

  return {
    redPlayerControls: {
      updateName(name: string) {
        dispatch(updateRedName(name))
      },
      addScore() {
        dispatch(addRedScore())
      },
      subtractScore() {
        dispatch(subRedScore())
      },
      addExit() {
        dispatch(addRedExit())
      },
      subtractExit() {
        dispatch(subRedExit())
      },
      addWarning() {
        dispatch(addRedWarn())
      },
      subtractWarning() {
        dispatch(subRedWarn())
      }
    },
    bluePlayerControls: {
      updateName(name: string) {
        dispatch(updateBlueName(name))
      },
      addScore() {
        dispatch(addBlueScore())
      },
      subtractScore() {
        dispatch(subBlueScore())
      },
      addExit() {
        dispatch(addBlueExit())
      },
      subtractExit() {
        dispatch(subBlueExit())
      },
      addWarning() {
        dispatch(addBlueWarn())
      },
      subtractWarning() {
        dispatch(subBlueWarn())
      }
    },
    gameSettingsControls: {
      updateTitle(title: string) {
        dispatch(updateGameTitle(title))
      },
      updateTime(missingSeconds: number) {
        dispatch(updateGameTime(missingSeconds))
      }
    },
    endGame() {
      dispatch(endGame())
    },
    setWinner(winner: "red" | "blue") {
      dispatch(setWinner(winner))
    },
    startTime() {
      dispatch(startGame())
    },
    pauseTime() {
      dispatch(pauseGame())
    },
    saveDefault() {
      dispatch(saveDefault())
    },
    restoreDefault() {
      dispatch(restoreDefault())
    }
  };
};
