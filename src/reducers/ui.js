import actions from '../actions/CONSTANTS';
import { createReducer } from './';

const {
  SIDENAV_TOGGLE,
  SCROLL_UP,
  SCROLL_DOWN,
  LOADING_START,
  LOADING_DONE,
} = actions;

const initialState = {
  isSideNavOpen: false,
  isScrolledUp: true,
  isLoading: false,
}

export default createReducer(initialState, {
  [SIDENAV_TOGGLE](ui) {
    return Object.assign({...ui}, { isSideNavOpen: !ui.isSideNavOpen });
  },
  [SCROLL_UP](ui) {
      return Object.assign({...ui}, { isScrolledUp: true });
  },
  [SCROLL_DOWN](ui) {
      return Object.assign({...ui}, { isScrolledUp: false });
  },
  [LOADING_START](ui) {
    return Object.assign({...ui}, { isLoading: true });
  },
  [LOADING_DONE](ui) {
      return Object.assign({...ui}, { isLoading: false });
  },
})
