import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import "./TodoApp.css"

function TodoApp() {
    const [todos, setTodos] = useState([]);

    console.log(todos);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (id, updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className='Todo'>
            <h1>My Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default TodoApp;