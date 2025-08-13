import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoInput from './components/ToDoInput';
import ToDoListTable from './components/ToDoListTable';

function App() {
  const [todos, setToDos] = useState([])

  useEffect(() => {
    const storedToDos = localStorage.getItem('todos');
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    }
  }, [])

  return (
    <>
      <Header />
      <ToDoInput setToDos={setToDos} todos={todos} />
      { todos && todos.length > 0 ? <ToDoListTable todos={todos} setToDos={setToDos} /> : "No ToDo Items!" }
    </>
  )
}

export default App;