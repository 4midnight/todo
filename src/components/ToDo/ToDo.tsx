import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UseTypesSelector } from '../../hooks/UseTypesSelector';
import { addToDoAC, errToDoAC } from '../../store/reducer/todoReducer';
import ToDoList from './ToDoList'

const ToDo: React.FC = () => {

  const state = UseTypesSelector(state => state.todo);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const formChangeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      dispatch(errToDoAC("Error. The feild must not empty"));
      return;
    }

    dispatch(errToDoAC(null))
    dispatch(addToDoAC({ id: new Date(), name: task }))
    setTask("")
  }

  const taskInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }


  return (
    <div className='todo'>
      <form className="form" onSubmit={formChangeHandler}>
        <div className="todo-header">
          ToDo List
        </div>
        {state.err !== null ? <p className='error'>{state.err}</p> : undefined}
        <input className='todo-input' type="text" placeholder='task' onChange={taskInputChangeHandler} value={task} />
        <ToDoList todo={state.todo} />
      </form>
    </div>
  )
}

export default ToDo