import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import axios from 'axios';

// import callApi from '../../utils/apiCaller';
import {
  SEND_IMAGE_REQUEST,
  SET_IMAGE,
} from './constants';

function* sendImage({ image, compCoef }) {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append('image', image.files[0]);
    bodyFormData.append('compCoef', compCoef);

    image = bodyFormData.get('image');
    const requestConfig = {
      method: 'post',
      url: 'http://httpbin.org/post',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    };
    // const { data } = yield call(axios, requestConfig);
    const MOCK_ARRAY = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
    ];
    yield put({
      type: SET_IMAGE,
      image,
      compCoef,
      countedData: MOCK_ARRAY,
    });
  } catch ({ message }) {
    console.error(message);
  }
}

function* sendImageSaga() {
  yield takeEvery(SEND_IMAGE_REQUEST, sendImage);
}

export default function* rootMainSaga() {
  yield all([
    fork(sendImageSaga),
  ]);
}
