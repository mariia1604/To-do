import { useState } from 'react'
import './App.css'

function Form (props) {

    const [value, setValue] = useState("");

  return (
    <>
    <form className='form' onSubmit={
        e => {
            e.preventDefault();
            props.putTodo(value);
            setValue("");
        }
    }>
        <input type="text" placeholder='Enter task...' className='input' value={value} onChange={ e => setValue(e.target.value) } />
        <button type="submit" id='add_task'>add</button>
    </form>
      
    </>
  )
}

export default Form
