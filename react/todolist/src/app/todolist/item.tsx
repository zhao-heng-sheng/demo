const change = (e: any) => {
    console.log(e.target.checked)
}
export default function Item(props: any) {
    const {id,name,done} = props
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={change} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>
                删除
            </button>
        </li>
    )
}
