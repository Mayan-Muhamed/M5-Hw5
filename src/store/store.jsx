import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postRedux } from './PostReduser';

const routtRduser = combineReducers({
  ReduxPost: postRedux,
});

export const store = legacy_createStore(
  routtRduser,
  composeWithDevTools(applyMiddleware(thunk))
);
