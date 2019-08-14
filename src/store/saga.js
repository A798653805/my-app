import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreator'
import axios from 'axios';

// 使用try catch
function* getInitList() {
  const res = yield axios.get('https://api.myjson.com/bins/h4n3v');
  const data = res.data;
  const action = initListAction(data);
  yield put(action);
    // store.dispatch(action);
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;