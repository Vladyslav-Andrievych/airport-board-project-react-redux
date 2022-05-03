import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { boardReducer } from './board/board.reducer.js';

const appReducer = combineReducers({
  board: boardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
