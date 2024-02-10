import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [array, setArray] = useState([])
  const [task, setTask] = useState('')

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem('list'))
    if (taskList) {
      setArray(taskList)
    }
  }, [])

  const setList = (task) => {
    if (task) {
    setArray([...array, { task: task, done: false }])
    localStorage.setItem('list', JSON.stringify([...array, { task: task, done: false }]))
    } else {
      alert("You haven't entered anything :(")
    }
  }

  const updateList = (index, value) => {
    const updateArray = array.map((item, i) =>
      i == index ? { ...item, task: value } : item
    )
    setArray(updateArray)
    localStorage.setItem('list', JSON.stringify(updateArray))
  }

  const done = (index) => {
    const updateArray = array.map((item, i) =>
      i == index ? { ...item, done: true } : item
    )
    setArray(updateArray)
    localStorage.setItem('list', JSON.stringify(updateArray))
  }

  const deleteTask = (i) => {
    const newArray = array.filter((a, index) => {
      return index !== i
    })
    console.log(newArray);
    setArray(newArray)
    localStorage.setItem('list', JSON.stringify(newArray))
  }

  return (
    <>
    <div className="main">
      <div className="tasks">
        <h1>Add task</h1>
        <div className="form">
          <input type="text" placeholder='Enter task...' className='input' value={task} onChange={(a) => setTask(a.target.value)} />
          <button id='add_task' onClick={() => { setList(task); setTask('') }} className='btnAdd'>add</button>
        </div>
      </div>
      <div className="tasks">
        <h1>My tasks</h1>
        <p className="attention">*click on the note to edit it</p>
        <div className="added_task">
          {
            array.map((e, index) => (
              <div className="form" key={index}>
                <input type="text" className={e.done ? "todo done" : "todo"} value={e.task} onChange={(a) => updateList(index, a.target.value)} />
                <button id='complete_task' onClick={() => done(index)} className={e.done ? "todo_undone" : "todo_done"} >{e.done ? "undone" : "done"}</button>
                <button id='delete_task' onClick={() => deleteTask(index)} className='delete'>delete</button>
              </div>
            ))
          }
        </div>
          
      </div>

    </div>
      
    </>
  )
}

export default App
