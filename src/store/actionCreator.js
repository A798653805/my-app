import { CHANGE_INPUT_VALUE, ADD_LIST, DELET_ITEM } from "./actionType";

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