'use client';
import { useState } from "react";
import Header from "./search"
import List from "./list"
import Footer from "./footer"
import "./index.css"

function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, name: "吃饭", done: true },
        { id: 2, name: "睡觉", done: true },
        { id: 3, name: "xxoo", done: false },
    ])
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header />
                <List todos={todos} />
                <Footer />
            </div>
        </div>
    )
}
export default Todo
