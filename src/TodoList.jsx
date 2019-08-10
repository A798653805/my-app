import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {  
    super(props);
    // 当组件的state或者props发生改变使，render函数会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleItemDelet = this.handleItemDelet.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/h4n3v')
      .then((res) => {
        console.log(res);
        this.setState(() => {
          return {
            list: res.data
          }
        })
      }).catch((err) => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <>
        <div>
          <label htmlFor='insert'>输入内容</label>
          <input 
            id='insert'
            value={this.state.inputValue}
            onChange={this.handleChange}
            />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </>
    )
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      }
    });
  }
  
  handleBtnClick() {
    this.setState((preState) => {
      return {
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }
    });
  }
  
  handleItemDelet(index) {
    this.setState(() => {
      const list = [...this.state.list];
      list.splice(index,1);
      return {list}
    });
  }
  
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index} 
          content={item} 
          index={index}
          handleItemDelet={this.handleItemDelet}
        />        
      )
    })
  }
}

export default TodoList