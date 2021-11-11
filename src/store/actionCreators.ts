import {Dispatch} from 'redux';
import {ActionType, Action} from './actionTypes';


export const updateRedName = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_RED_NAME,
      payload: name
    });
  }
}
export const addRedScore = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_RED_SCORE
    });
  }
}
export const subRedScore = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_RED_SCORE
    });
  }
}
export const addRedExit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_RED_EXIT
    });
  }
}
export const subRedExit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_RED_EXIT
    });
  }
}
export const addRedWarn = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_RED_WARN
    });
  }
}
export const subRedWarn = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_RED_WARN
    });
  }
}

export const updateBlueName = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_BLUE_NAME,
      payload: name
    });
  }
}
export const addBlueScore = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_BLUE_SCORE
    });
  }
}
export const subBlueScore = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_BLUE_SCORE
    });
  }
}
export const addBlueExit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_BLUE_EXIT
    });
  }
}
export const subBlueExit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_BLUE_EXIT
    });
  }
}
export const addBlueWarn = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_BLUE_WARN
    });
  }
}
export const subBlueWarn = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SUB_BLUE_WARN
    });
  }
}
export const updateGameTitle = (title: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_GAME_TITLE,
      payload: title
    });
  }
}

export const updateGameTime = (missingTime: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_GAME_TIME,
      payload: missingTime
    });
  }
}
export const endGame = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.END_GAME
    });
  }
}
export const setWinner = (winner: "red" | "blue") => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_WINNER,
      payload: winner
    });
  }
}
export const startGame = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.START_GAME_TIME
    });
  }
}
export const pauseGame = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PAUSE_GAME_TIME
    });
  }
}
export const saveDefault = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_DEFAULT
    });
  }
}
export const restoreDefault = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESTORE_DEFAULT
    });
  }
}
