import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
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
    
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return (
      <>
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
          <div>
            <Input 
              value={this.state.inputValue}
              placeholder='to do' 
              style={{width: '300px', marginRight: '10px'}}
              onChange={this.handleChange}
            />
            <Button 
              type='primary'
              onClick={this.handleClick}
            >
              提交
            </Button>
          </div>
          <div style={{marginTop:'10px'}}>
            <List
              style={{width: '300px'}}
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
            />
          </div>
        </div>
      </>
    )
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