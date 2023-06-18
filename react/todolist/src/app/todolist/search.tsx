export default function Search(props) {
    const keyDone = (e) => {
        if(e.keyCode!==13) return;
        props.addTodo({
            name:e.target.value,
            done:false
        })
        e.target.value = ''
        console.log(e.target.value)
    }
    return (
        <div className="todo-header">
            <input type="text" onKeyDown={keyDone} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
