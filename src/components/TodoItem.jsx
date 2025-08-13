import Button from "./Button"

function ToDoItem ({ todo, onComplete, onDelete }) {
  return (
    <tr>
      <td>{todo.text}</td>
      <td>
        { 
          todo.completed ? "Completed" : <Button label='Complete' onClick={onComplete} />
        }
        | 
        <Button label='Delete' onClick={onDelete} /></td>
    </tr>
  )
}

export default ToDoItem;