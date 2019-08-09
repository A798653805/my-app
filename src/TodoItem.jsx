import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleItemDelet, index } = this.props;
    handleItemDelet(index);
  }

  // 在组件即将被挂在到页面上
  componentWillMount() {
    console.log('componentWillMount-item');
  }

  // 在组件挂在结束后执行
  componentDidMount() {
    console.log('componentDidMount-item');
  }

  // 组件被更新之前
  shouldComponentUpdate() {
    console.log('shouldCompoentUpdata-item');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate-item');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate-item')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  render() {
    console.log('render-item');
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content} - {test}
      </div>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItemDelet: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem;