import Item from "./item"
export default function List(props) {
    const {todos} = props
    return (
        <ul className="todo-main">
            {
                todos.map((item: { id: any }) => <Item key={item.id} {...item} updateTodo={props.updateTodo} delTodoItem={props.delTodoItem} />)
            }
        </ul>
    )
}
