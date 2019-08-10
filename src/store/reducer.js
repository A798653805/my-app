import { CHANGE_INPUT_VALUE, ADD_LIST, DELET_ITEM } from './actionType'
const defaultState = {
  inputValue: '',
  list: [
    'learn React',
    'learn HTTP',
    'learn JS',
    'learn Node'
  ]
};

// 可以接收state，但是不能修改state
export default (state = defaultState, action) => {
  const { type } = action;
  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case ADD_LIST:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      break;
    case DELET_ITEM:
      newState.list.splice(action.value, 1);
      break;
    default:
      return state
  }
  return newState
}