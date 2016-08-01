import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import {
  listApi,
  FETCH_POST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL
} from '../redux/module/PostList';

import {
  formApi,
  SAVE_POST,
  SAVE_SUCCESS,
  SAVE_FAIL
} from '../redux/module/PostForm';


export function* watchFetchPost() {
  yield takeLatest(FETCH_POST, fetchPost);
}

export function* fetchPost () {
  yield put({type: FETCH_REQUEST});
  try {
    let data = yield call(listApi.getPost());
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

export function* watchSavePost() {
  yield takeLatest(SAVE_POST, savePost);
}

export function* savePost (action) {
  const { data } = action;
  try {
    let res = yield call(formApi.savePost(), data);
    yield put({type: SAVE_SUCCESS});
  } catch (error) {
    yield put({type: SAVE_FAIL});
  }
}

export default function * rootSagas () {
  yield [
    fork(watchFetchPost),
    fork(watchSavePost)
  ];
}
