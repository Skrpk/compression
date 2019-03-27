import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import axios from 'axios';

// import callApi from '../../utils/apiCaller';
import {
  SEND_IMAGE_REQUEST,
  SET_IMAGE,
} from './constants';

const API_URL = 'https://rest.bandsintown.com';

function* loadArtistRequest({ artistName }) {
  /*try {
    const { data } = yield call(axios, `${API_URL}/artists/${artistName}?app_id=asdasd`);

    yield put({
      type: LOAD_ARTIST,
      artist: data,
    });
  } catch ({ message }) {
    console.error(message);
  }*/
}

function* sendImage({ image }) {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append('image', image);
    bodyFormData.set('userName', 'Fred');
    
    const requestConfig = {
      method: 'post',
      url: 'http://httpbin.org/post',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    };
    const { data } = yield call(axios, requestConfig);

    const MOCK_ARRAY = [
      { x: 0, y: 0, M: 1 },
      { x: 1, y: 0, M: 2 },
      { x: 2, y: 0, M: 3 },
      { x: 3, y: 0, M: 4 },
      { x: 0, y: 1, M: 5 },
      { x: 1, y: 1, M: 6 },
      { x: 2, y: 1, M: 7 },
      { x: 3, y: 1, M: 8 },
      { x: 0, y: 2, M: 9 },
      { x: 1, y: 2, M: 10 },
      { x: 2, y: 2, M: 11 },
      { x: 3, y: 2, M: 12 },
      { x: 0, y: 3, M: 13 },
      { x: 1, y: 3, M: 14 },
      { x: 2, y: 3, M: 15 },
      { x: 3, y: 3, M: 16 },
    ];
    yield put({
      type: SET_IMAGE,
      image,
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
    //fork(loadArtistEventsSaga),
  ]);
}
