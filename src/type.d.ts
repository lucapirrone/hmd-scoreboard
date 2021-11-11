export interface IPlayerState {
  name: string,
  score: number,
  exits: number,
  warning: number
}

export interface IGameSettingsState {
  title: string,
  missingSeconds: number,
  playing: boolean,
  finished: boolean,
  winner: "red" | "blue" | null,
  maxWarning: number,
  maxExits: number,
}

export interface IGameState {
  redPlayer: IPlayerState,
  bluePlayer: IPlayerState,
  gameSettings: IGameSettingsState
}

type GameAction = {
  type: string
  payload: any
}
type DispatchType = (args: GameAction) => GameAction
