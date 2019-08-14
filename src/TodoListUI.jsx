import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginLeft: '10px', marginTop: '10px'}}>
      <div>
        <Input 
          value={props.inputValue}
          placeholder='to do' 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleChange}
        />
        <Button 
          type='primary'
          onClick={props.handleClick}
        >
          提交
        </Button>
      </div>
      <div style={{marginTop:'10px'}}>
        <List
          style={{width: '300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={()=>{ props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
      </div>
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <>
//         <div style={{marginLeft: '10px', marginTop: '10px'}}>
//           <div>
//             <Input 
//               value={this.props.inputValue}
//               placeholder='to do' 
//               style={{width: '300px', marginRight: '10px'}}
//               onChange={this.props.handleChange}
//             />
//             <Button 
//               type='primary'
//               onClick={this.props.handleClick}
//             >
//               提交
//             </Button>
//           </div>
//           <div style={{marginTop:'10px'}}>
//             <List
//               style={{width: '300px'}}
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item, index) => (<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//             />
//           </div>
//         </div>
//       </>
//     )
//   }
// }

export default TodoListUI;
