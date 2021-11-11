import { getStoredState, REHYDRATE } from 'redux-persist'
import {Store} from "redux";
import {GameAction, IGameState} from "../type";
import {PersistConfig} from "redux-persist/es/types";

export default
function crossBrowserListener(store: Store<IGameState, GameAction>, persistConfig: PersistConfig<any>) {
  return async function() {
    let state = await getStoredState(persistConfig)

    store.dispatch({
      type: REHYDRATE,
      key: persistConfig.key,
      payload: state,
    })
  }
}
