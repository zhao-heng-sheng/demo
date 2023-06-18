import Item from "./item"
export default function List(props) {
    const {todos} = props
    return (
        <ul className="todo-main">
            {
                todos.map((item) => <Item key={item.id} {...item} />)
            }
        </ul>
    )
}
