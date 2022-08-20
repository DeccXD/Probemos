import React, {useState} from "react";
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        {todo: '1-Sopa Maggie'},
        {todo: '2-Jugo de uva'},
        {todo: '3-Nachos'},
        {todo: '4-Queso cheddar'}
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') 
        {
            alert('el campo no puede estar vacio')
            return
        }
        setTodo([...todos, todo])
    }
    const deleteTodo = indice => {
        const newTodos= [...todos]
        newTodos.splice(indice, 1)
        setTodo(newTodos)
    }
    return (
     <>
     <form onSubmit={e => e.preventDefault()}>
        <label>Agregar tareas</label><br/>
        <input type="text" name="todo" onChange={handleChange}/>
        <button onClick={handleClick}>agregar</button>
     </form>
     {
        todos.map((value, index) => (
        <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
        ))
     }
     </>
    )
}
export default Form