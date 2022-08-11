import React from 'react'
import { useDispatch } from 'react-redux'
import { delToDoAC } from '../../store/reducer/todoReducer';

interface ToDoListProps {
  todo: any[]
}

const ToDoList: React.FC<ToDoListProps> = ({ todo }) => {

  const dispatch = useDispatch();

  const removeTaskHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event.currentTarget.id);
    dispatch(delToDoAC(event.currentTarget.id))
  }


  return (
    <ul className='todo-list'>
      {todo.map((item, index) => (<li key={item.id} id={item.id} className='todo-list-item' onClick={removeTaskHandler}>{index + 1}. {item.name}</li>))}

    </ul>
  )
}

export default ToDoList