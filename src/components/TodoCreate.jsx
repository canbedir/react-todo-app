import { useState } from "react"
import "./todocreate.css"

const TodoCreate = ({onCreateTodo}) => {

  const [newTodo, setNewTodo] = useState ('')

  const clearInput = () => {
    setNewTodo('')
  }

  const createTodo = () => {
    if(!newTodo) return;
    const request = {
      id : Math.floor(Math.random()*9999999),
      content : newTodo
    }
    onCreateTodo(request)
    clearInput();
  }


  return (
    <div className="container">
        <div className="todo-create">
            <input
             onChange={(e) => setNewTodo(e.target.value)}
             value={newTodo}
             type="text" className="todo-input" placeholder="Todo giriniz"/>
            <button onClick={createTodo} className="todo-create-button">Ekle</button>
        </div>
    </div>
  )
}

export default TodoCreate