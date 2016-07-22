import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import {
  api,
  FETCH_POST,
  FETCH_SUCCESS,
  FETCH_FAIL
} from '../redux/module/PostList'

export function* watchFetchPost() {
  yield takeLatest(FETCH_POST, fetchPost);
}

export function* fetchPost () {
  try {
    let data = yield call(api.getPost());
    yield put({
      type: FETCH_SUCCESS,
      data: data
    });
  } catch(e) {
    yield put({
      type: FETCH_FAIL
    });
  }
}

export default function * rootSagas () {
  yield [
    fork(watchFetchPost)
  ];
}
