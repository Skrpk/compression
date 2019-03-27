import { fork } from 'redux-saga/effects';
import rootMainSaga from './modules/Main/mainSagas';

export default function* rootSaga() {
  yield [
    fork(rootMainSaga),
  ];
};
