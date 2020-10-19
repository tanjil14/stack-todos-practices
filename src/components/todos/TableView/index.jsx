import React from 'react'
import PropTypes from 'prop-types';
import {Button, CustomInput, Table } from 'reactstrap'

//Single Row Item

const RowItem=({todo,toggleSelect,toggleComplete})=>(  //implecit return
  <tr>
   <td scope='row'>
        <CustomInput
        type='checkbox'
        id={todo.id}
        checked={todo.isSelect}
        onChange={()=>toggleSelect(todo.id)}
       />
</td>
<td>
{todo.time.toDateString()}
</td>
<td>
{todo.text}
</td>
<td>
<Button 
color={todo.isComplete?'danger':'success'}
onClick={()=>toggleComplete(todo.id)}
>{todo.isComplete?'Complete':'Running'}</Button>
</td>
</tr>

);

RowItem.propTypes={
    todo:PropTypes.object.isRequired,
        toggleSelect:PropTypes.func.isRequired,
        toggleComplete:PropTypes.func.isRequired
};


const TableView =({todos, toggleSelect, toggleComplete})=>(
        <Table>
           <thead>
              <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
             </tr>
         </thead>
        <tbody>
           {todos.map(todo=>(
               <RowItem
               key={todo.id}
               todo={todo}
               toggleSelect={toggleSelect}
               toggleComplete={toggleComplete}

               />
           ))}
           </tbody>
           </Table>
);
TableView.propTypes={
        todos:PropTypes.object.isRequired,
        toggleSelect:PropTypes.func.isRequired,
        toggleComplete:PropTypes.func.isRequired
};

export default TableView;