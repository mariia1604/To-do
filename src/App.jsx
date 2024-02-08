import { useState } from 'react'
import './App.css'
import Form from './form'

function App() {

  const [todos, setTodos] = useState([])

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert("Введите текст")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Add task</h1>
        <Form 
          putTodo={putTodo}
        />
        <h1 className="title">My tasks</h1>
        <ul className="todos">
          {
            todos.map(todo => {
              return (
                <li className={todo.done ? "todo done" : "todo"} key={todos.id} onClick={() => toggleTodo(todo.id)}>
                  {todo.text}
                  <button className='delete' onClick={e => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}>delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App
