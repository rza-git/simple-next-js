
import TodoList from "@/components/TodoList";

const Todo = async () => {

    const handleSubmit = () => {

    }
    return (
        <div>
           <input style={{display: "block", marginBottom: "2px"}}type='text' placeholder="test"/>
           <input style={{display: "block", marginBottom: "2px"}}type='text' placeholder="test"/>
           <input style={{display: "block", marginBottom: "2px"}}type='text' placeholder="test"/>
           <input style={{display: "block", marginBottom: "2px"}}type='text' placeholder="test"/>
           <input style={{display: "block", marginBottom: "2px"}}type='text' placeholder="test"/>
           <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}

export default Todo;