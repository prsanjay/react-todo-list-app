import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <div>
        <h1>My To-Do List</h1>
      </div>
      <div>
        <input type="text" placeholder="Add a new task" />
        <button>Add Task</button>
      </div>
      <div>
        <ul>
         <li>Task - 1</li>
         <li>Task - 2</li>
         <li>Task - 3</li>
        </ul>
      </div>
    </>
  )
}

export default App


// 1. Initially we need to get the data from localstorage