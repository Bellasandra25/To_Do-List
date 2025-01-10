import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () =>{
const [todos, setTodos] = useState([]);
const[newTodo, setNewTodo] = useState('');
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos')
.then((res)=>{
setTodos(res.data);
})
.catch(err);{
  console.log("firstError");
}

},[todos]);

const newTodoHandler = (e) => {
e.preventDefault();
setNewTodo(e.target.value);
}

const addTodoHandler = (e) => {
  e.preventDefault();
  const newTodo = {
    id: todos.length + 1,
    title: newTodo,
    completed: false
  }

}
  return (
    <div>
  <h1>To-Do LIst</h1>
 <Form>
  <input 
  value={newTodo}
  onChange={newTodoHandler}
  type="text" 
  placeholder="Enter your to-do"
   />
  <button 
  onClick={addTodoHandler}
  type="submit">Add</button>
 </Form>


  <ul>
  {todos.map((todo)=>(
    <li key={todo.id}>
      {todo.title} {todo.completed}
      </li>
    ))}

  </ul>



    </div>
  )
};

export default App