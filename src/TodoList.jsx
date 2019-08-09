import React, { Component } from 'react';
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

  handleChange() {
    const value = this.input.value;
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
    }, () => {
      console.log(this.ul.querySelectorAll('div').length);
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
    
    // 在组件即将被挂在到页面上
    componentWillMount() {
      console.log('componentWillMount');
    }

    // 在组件挂在结束后执行
    componentDidMount() {
      console.log('componentDidMount');
    }

    // 组件被更新之前
    shouldComponentUpdate() {
      console.log('shouldCompoentUpdata');
      return true;
    }

    componentWillUpdate() {
      console.log('componentWillUpdate');
    }

    componentDidUpdate() {
      console.log('componentDidUpdate')
    }

    render() {
      console.log('render');
      return (
        <>
        <div>
          <label htmlFor='insert'>输入内容</label>
          <input 
            id='insert'
            ref={(input) => {this.input = input}}
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {
            this.getTodoItem()
          }
        </ul>
      </>
    )
  }
}

export default TodoList