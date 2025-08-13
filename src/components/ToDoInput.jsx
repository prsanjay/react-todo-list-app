import { useState } from 'react';
import Button from './Button';

function ToDoInput({ setToDos, todos }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    const updatedTodos = [...todos, newTodo];
    setToDos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setInputValue('');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Add a new ToDo" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label="Add ToDo" onClick={handleAddTodo} />
    </div>
  )
}

export default ToDoInput;