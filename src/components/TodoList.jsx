import Todo from "./Todo"
import "./todolist.css"


const TodoList = ({todos, onDeleteTodo, onUpdateTodo}) => {
  return (
    <div className="todolist-container">
        {
          todos && todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>  
          ))
        }
    </div>
  )
}

export default TodoList