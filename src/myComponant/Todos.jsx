import React from 'react'
import { TodoItem } from "./TodoItem";
export default function Todos(props) {
    let style={
        paddingBottom: "90px",
    }
    return (
        <div className="container" style={style}>
            <h1 className="text-center mt-4">TODO LIST</h1>
            {
                props.todos.map((ele)=>{
                    return(
                        <TodoItem todo={ele} keys={ele.sno} todoDelete={props.todoDelete}/>
                    )
                })
            }
        </div>
    )
}
