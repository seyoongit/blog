import { combineReducers } from 'redux';
import search from './search';
import ui from './ui';
import menu from './menu';
import post from './post';
import auth from './auth';
import dimmer from './dimmer';


export function createReducer(initialState, handlers) {
  return function reducer(state=initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    else {
      return state
    }
  }
}

export default combineReducers({
  search,
  ui,
  menu,
  post,
  auth,
  dimmer,
})