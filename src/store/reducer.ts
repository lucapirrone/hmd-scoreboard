import {ActionType} from "./actionTypes";
import {GameAction, IGameState} from "../type";

export const initialState: IGameState = {
  redPlayer: {
    name: "Red",
    score: 0,
    exits: 0,
    warning: 0
  },
  bluePlayer: {
    name: "Blue",
    score: 0,
    exits: 0,
    warning: 0
  },
  gameSettings: {
    title: "Fight",
    playing: false,
    finished: false,
    winner: null,
    missingSeconds: 181,
    maxWarning: 3,
    maxExits: 2
  }
};

const reducer = (
  state: IGameState = initialState,
  action: GameAction
): IGameState => {
  switch (action.type) {
    case ActionType.UPDATE_RED_NAME:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          name: action.payload
        }
      }
    case ActionType.ADD_RED_SCORE:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          score: state.redPlayer.score + 1
        }
      }
    case ActionType.SUB_RED_SCORE:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          score: state.redPlayer.score - 1
        }
      }
    case ActionType.ADD_RED_EXIT:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          exits: state.redPlayer.exits + 1
        }
      }
    case ActionType.SUB_RED_EXIT:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          exits: state.redPlayer.exits - 1
        }
      }
    case ActionType.ADD_RED_WARN:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          warning: state.redPlayer.warning + 1
        }
      }
    case ActionType.SUB_RED_WARN:
      return {
        ...state,
        redPlayer: {
          ...state.redPlayer,
          warning: state.redPlayer.warning - 1
        }
      }
    case ActionType.UPDATE_BLUE_NAME:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          name: action.payload
        }
      }
    case ActionType.ADD_BLUE_SCORE:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          score: state.bluePlayer.score + 1
        }
      }
    case ActionType.SUB_BLUE_SCORE:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          score: state.bluePlayer.score - 1
        }
      }
    case ActionType.ADD_BLUE_EXIT:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          exits: state.bluePlayer.exits + 1
        }
      }
    case ActionType.SUB_BLUE_EXIT:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          exits: state.bluePlayer.exits - 1
        }
      }
    case ActionType.ADD_BLUE_WARN:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          warning: state.bluePlayer.warning + 1
        }
      }
    case ActionType.SUB_BLUE_WARN:
      return {
        ...state,
        bluePlayer: {
          ...state.bluePlayer,
          warning: state.bluePlayer.warning - 1
        }
      }
    case ActionType.UPDATE_GAME_TITLE:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          title: action.payload
        }
      }
    case ActionType.UPDATE_GAME_TIME:
      if (action.payload <= 0) {
        return {
          ...state,
          gameSettings: {
            ...state.gameSettings,
            playing: false,
            missingSeconds: 0
          }
        }
      }
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          missingSeconds: action.payload !== '' ? action.payload : 0
        }
      }
    case ActionType.SET_WINNER:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          winner: action.payload
        }
      }
    case ActionType.END_GAME:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          playing: false,
          finished: true
        }
      }
    case ActionType.START_GAME_TIME:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          playing: true,
          finished: false,
          winner: null
        }
      }
    case ActionType.PAUSE_GAME_TIME:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          playing: false
        }
      }
    case ActionType.SAVE_DEFAULT:
      localStorage.setItem('HMD_SCOREBOARD_SETTINGS', JSON.stringify(state));
      return state
    case ActionType.RESTORE_DEFAULT:
      const defaultSettings = localStorage.getItem('HMD_SCOREBOARD_SETTINGS');
      return defaultSettings ? JSON.parse(defaultSettings) : state;
  }
  return state
}

export default reducer
