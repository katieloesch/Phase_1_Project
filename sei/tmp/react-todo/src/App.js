import { useState } from "react";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";
import './ToDoList.css'



function App() {
  const [todos, setTodos] = useState([
    {text: "Have Fun", completed: true},
    {text: "Learn React", completed: false},
    {text: "Learn the MERN-Stack", completed: false}
  ]);
  
  const [showTodos, setShowTodos] = useState(true)
  
  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function deleteTodo(todo) {
    const filteredTodos = [...todos].filter((item) => (item.text !== todo.text))
    setTodos(filteredTodos)
  }

  function markAsCompleted(todo) {
    const index = [...todos].findIndex((item) => (item.text === todo.text))
    const completedTodo = {...todo}
    completedTodo.completed = true

    const updatedTodos = [...todos]
    updatedTodos[index] = completedTodo
    setTodos(updatedTodos)
  }


  return (
    <div className="App">
    <h1>React To-Do</h1>
     <button className="btn-show" onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'Hide' : 'Show'}</button>
     {showTodos && <ToDoList todos={todos} deleteTodo={deleteTodo} markAsCompleted={markAsCompleted}/>}
     <br></br>
      <hr  style={{
        color: '#01411C',
        backgroundColor: '#01411C',
        height: .5,
        borderColor : '#01411C'
      }}/>
     <NewToDoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
