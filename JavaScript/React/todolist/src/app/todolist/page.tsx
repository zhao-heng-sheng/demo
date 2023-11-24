"use client"
import { useState, useEffect,useContext } from "react"
import Header from "./search"
import List from "./list"
import Footer from "./footer"
import "./index.css"
import { v4 } from "uuid"

function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, name: "吃饭", done: true },
        { id: 2, name: "睡觉", done: true },
        { id: 3, name: "xxoo", done: false },
    ])
    useEffect(() => {
        console.log("xxx")
        console.log(v4())
    }, [])
    const addTodo = (todoObj: any) => {
        setTodos([...todos, { ...todoObj, id: v4() }])
    }
    const updateTodo = (id: number, done: boolean) => {
        const i = todos.findIndex((item) => item.id === id)
        const newTodos = [...todos]
        newTodos[i].done = done
        setTodos(newTodos)
    }
    const delTodoItem = (id: number) => {
        const newTodos = todos.filter((item) => item.id !== id)
        setTodos(newTodos)
    }
    const checkAll = (doneAll: boolean) => {
        const newTodos = todos.map((item) => {
            return { ...item, done: doneAll }
        })
        setTodos(newTodos)
    }
    const clearFinish = () => {
        const newTodos = todos.filter((item) => !item.done)
        setTodos(newTodos)
    }
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={addTodo} />
                <List todos={todos} updateTodo={updateTodo} delTodoItem={delTodoItem} />
                <Footer todos={todos} checkAll={checkAll}  clearFinish={clearFinish} />
            </div>
        </div>
    )
}
export default Todo
