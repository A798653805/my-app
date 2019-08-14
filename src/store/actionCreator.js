import { CHANGE_INPUT_VALUE, ADD_LIST, DELET_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from "./actionType";
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_LIST
})

export const getDeletItemAction = (value) => ({
  type: DELET_ITEM,
  value
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// redux-thunk 书写方案
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('https://api.myjson.com/bins/h4n3v').then((res) => {
//       const data = res.data;
//       const action = initListAction(data);

//       dispatch(action);
//     })
//   }
// }

export const getInitList = () => ({
  type: GET_INIT_LIST
})