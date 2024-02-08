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
                <li >
                  <a className={todo.done ? "todo done" : "todo"} key={todos.id}>{todo.text}</a>
                  <button className='complete'  id='complete_task' onClick={() => toggleTodo(todo.id)}>done</button>
                  <button className='delete'  id='delete_task' onClick={e => {
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
