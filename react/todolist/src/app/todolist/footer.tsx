import React, { useState } from 'react'
export default function Footer(props) {
    const {todos} = props

    const [doneAll,setDoneAll] = useState(todos.every(item=>item.done))
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={todos.every(item=>item.done)} onChange={(e)=>{props.checkAll(e.target.checked)}} />
            </label>
            <span>
                <span>已完成{todos.filter(item=>item.done).length}</span> / 全部{todos.length}
            </span>
            <button className="btn btn-danger" onClick={props.clearFinish}>清除已完成任务</button>
        </div>
    )
}
