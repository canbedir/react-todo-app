import "./todo.css"
import { IoMdClose } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";



const Todo = ({todo, onDeleteTodo , onUpdateTodo}) => {

  const {id, content} = todo;

  const deleteTodo = () =>{
    onDeleteTodo(id);
  }

  const [editable, setEditable] = useState (false)
  const [editTodo, setEditTodo] = useState (content)

  const updateTodo = () => {
    const request = {
      id : id,
      content : editTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div className="todo-container">
        <div className="todo-wrapper">
            <div key={id}>
                {
                  editable ? <input className="editableInput" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type="text" /> : content
                }
            </div>
            <div className="todo-icons">
              <IoMdClose onClick={deleteTodo} className="todo-icon" />
              {
                editable ? <FaCheck onClick={updateTodo} className="todo-icon" /> 
                : <HiMiniPencilSquare onClick={()=> setEditable(true)} className="todo-icon" />
              }
            </div>
        </div>
    </div>
  )
}

export default Todo