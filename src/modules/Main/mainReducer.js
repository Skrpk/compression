import { Map } from 'immutable';

import {
  SET_IMAGE,
} from './constants';

const initialState = Map({
  image: null,
  countedData: [],
  compCoef: 1,
});

const mainReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_IMAGE: {
      return state
              .set('image', action.image)
              .set('compCoef', action.compCoef)
              .set('countedData', action.countedData);
    }
    default:
      return state;
  }
};

export default mainReducer;


