import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <>
        <div>
          <input 
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item,index) => (
              <li key={item} onClick={this.props.handleDelete}>{item}</li>
            ))
          }
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);