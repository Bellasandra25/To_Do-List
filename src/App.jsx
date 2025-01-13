import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () =>{
const [todos, setTodos] = useState([]);
const[newTodo, setNewTodo] = useState('');
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then((res)=>{
setTodos(res.data);
})
.catch((err)=>{
  console.log("first error", err); 
});

},[]);

const newTodoHandler = (e) => {
e.preventDefault();
setNewTodo(e.target.value);
}

const addTodoHandler = (e) => {
  e.preventDefault();
  const newTask = {
    id: todos.length + 1,
    title: newTodo,
    completed: false
  };
  setTodos([...todos, newTodo]);
    setNewTodo('');
  
};

const completionHandler = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );  
}

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
  <h1 className='flex items-center justify-center p-5'><strong>To-Do List App</strong></h1>
 <form className='flex items-center jutify-center p-5 '>
  <input 
  className='p-3 m-2 outline-none rounded-lg border-neutral-50/75 '
  value={newTodo}
  onChange={newTodoHandler}
  type="text" 
  placeholder="Enter your to-do"
   />
  <button
  className='p-3 m-2 bg-blue-500 text-white rounded-lg' 
  onClick={addTodoHandler}
  type="submit">Add Task</button>
 </form>

  <ul>
  {todos.map((todo)=>(
    <li key={todo.id}>
      {todo.title}
      <button onClick={()=>completionHandler(todo.id)} className={`border-2 rounded-full p-2 ${todo.completed ? ' bg-green-300':'bg-blue-300'}`}>
        {todo.completed? 'undo':'Done'}</button>
    {todo.completed ? 'Completed' : 'Not Completed'}
     </li>
    ))}

  </ul>



    </div>
  )
};

export default App