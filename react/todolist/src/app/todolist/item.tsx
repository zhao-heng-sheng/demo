import {useState} from 'react'
export default function Item(props: any) {
    const {id,name,done} = props
    const [mouse,setMouse] = useState(false)
    const change = (id) => {
        return (e)=>{
            // console.log(e.target.checked)
            props.updateTodo(id,e.target.checked)
        }
    }
    const MouseEnter = (e) => {
        // console.log('11')
        setMouse(true)
    }
    const MouseLeave = (e) => {
        // console.log('22')
        setMouse(false)
    }
    const delTodo = () => {
        if(window.confirm('确定删除吗？')){
            props.delTodoItem(id)
        }
    }
    return (
        <li onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} style={{background:mouse?'#e8e8e8':'#fff'}}>
            <label>
                <input type="checkbox" checked={done} onChange={change(id)} />
                <span>{name}</span>
            </label>
            <button onClick={delTodo} className="btn btn-danger" style={{ display: mouse?'block':'none' }}>
                删除
            </button>
        </li>
    )
}
