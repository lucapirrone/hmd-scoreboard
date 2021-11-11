import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from "./store/reducer"
import {createStore, applyMiddleware, Store} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {DispatchType, GameAction, IGameState} from "./type";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import crossBrowserListener from './utils/reduxpersistListener'
import './fonts/Open-24-Display.ttf';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store: Store<IGameState, GameAction> & {
  dispatch: DispatchType
} = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
window.addEventListener('storage', crossBrowserListener(store, persistConfig));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
