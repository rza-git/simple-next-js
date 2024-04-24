"use client"

import { deleteTodo } from "@/fetching/todos"
import Link from "next/link"

const TodoList = ({todos}) => {

    const handleDelete = async(id) => {
        console.log("HANDLE CLICK")

        await deleteTodo(id) 
    }

    return (
        <>
            <Link href="/create">CREATE TODO</Link>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={(e) => handleDelete(todo.id)}>DELETE</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TodoList