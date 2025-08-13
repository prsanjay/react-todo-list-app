import { useCallback } from 'react';
import ToDoItem from './ToDoItem';

function ToDoListTable ({ todos, setToDos }){

  const handleComplete = useCallback((todoId) => {
    const updatedList = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: true } : todo
    );
    setToDos(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  }, [todos, setToDos])

  const handleDelete = useCallback((todoId) => {
    const updatedToDos = todos.filter(todo => todo.id !== todoId);
    setToDos(updatedToDos);
    localStorage.setItem('todos', JSON.stringify(updatedToDos));
  }, [todos, setToDos])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ToDo Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos && 
              todos.map(todo => <ToDoItem key={todo.id} todo={todo} onComplete={() => handleComplete(todo.id)} onDelete={() => handleDelete(todo.id)} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ToDoListTable;