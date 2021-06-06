import React from 'react'
import {useState} from 'react';

export default function Addtodo({addTodo}) {
    const [task, setTask] = useState("");
    const [dscr, setDscr] = useState("");
    const onClickadd =()=>{
            if (!task||!dscr){
                alert("No Tast");
            }
            else{
                addTodo(task,dscr);
            };
            setTask("");
            setDscr("");
    }
    return (
        <div className="container">
            <div className="mt-4 bg-light border border-primary px-4 py-3 rounded">
                <div className="mb-3">
                    <input type="text" value={task} className="form-control" id="exampleFormControlInput1" placeholder="Write Your Task Topic" onChange={(e)=>setTask(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={dscr} id="exampleFormControlTextarea1" placeholder="Desription About Your Task" rows="4" onChange={(e)=>setDscr(e.target.value)}></textarea>
                </div>
                <button className="btn btn-outline-primary" onClick={onClickadd}>Add TODO</button>
            </div> 
        </div>
    )
}
