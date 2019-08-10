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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    }
    return false; 
  }

  render() {
    const { content} = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  handleItemDelet: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;