import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import { getInputChangeAction, getAddItemAction, getDeletItemAction } from './store/actionCreator'
import store from './store/index'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {  
    super(props);
    this.state = store.getState();

    this.handleChange = this.handleChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)
    
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />)
  }

  handleChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeletItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
}

export default TodoList