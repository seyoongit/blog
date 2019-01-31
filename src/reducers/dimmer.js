import actions from '../actions/CONSTANTS';
import { createReducer } from './';

const {
  DIMMER_MESSAGE,
  DIMMER_ACTIVATE,
  DIMMER_INACTIVATE,
} = actions;

const initialState = {
  mode: "",
  message: "",
};

export default createReducer(initialState, {
  [DIMMER_MESSAGE](ui, { message }) {
    return Object.assign({...ui}, { message });
  },
  [DIMMER_ACTIVATE](ui, { mode }) {
    return Object.assign({...ui}, { mode });
  },
  [DIMMER_INACTIVATE](ui) {
    return Object.assign({...ui}, { message: "", mode: "" });
  },
})
