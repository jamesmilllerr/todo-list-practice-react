import React, { ChangeEvent, FormEvent, useState, MouseEventHandler } from 'react'
//import {List} from './list';

interface todoItem {
  id: number
  todoItem: string
}
export const Form = () => {
  let [newTask, setNewTask] = useState('');
  let [tasks, setTasks] = useState<todoItem[]>([]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const currTodoItem: todoItem = {
      id: Date.now(),
      todoItem: newTask
    }
    setTasks([
      ...tasks, currTodoItem
    ])
    setNewTask('')
    event.preventDefault()
  }

  const removeItem = (id: Number) => {
    setTasks(tasks.filter((task) => task.id != id))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Task:
          <input type="text" name="newTask" value={newTask} onChange={handleChange}/>
        </label>
        <button>
          submit
        </button>
      </form>
      <div>
        <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.todoItem}
            <button onClick={() => removeItem(task.id)}>
              remove
            </button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
