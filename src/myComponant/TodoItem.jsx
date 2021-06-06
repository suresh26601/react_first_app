import React from 'react'
export const TodoItem = ({todo,todoDelete}) => {
    return (
        <div className="bg-light container mt-2 px-4 py-3 border border-success rounded">
            <h3>{todo.sno}.{todo.task}</h3>
            <p>{todo.dscr}</p>
            <button className="btn btn-danger" onClick={()=>{todoDelete(todo)}}> Delete TODO</button>
        </div>
    )
}
