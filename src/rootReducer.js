import { combineReducers } from 'redux';

import mainReducer from './modules/Main/mainReducer';

export default combineReducers({
  main: mainReducer,
});
