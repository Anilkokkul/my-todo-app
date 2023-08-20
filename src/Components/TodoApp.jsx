import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import "./TodoApp.css"

function TodoApp() {
    const [todos, setTodos] = useState([]); // To store the input data created empty  state where will push the all the data

    // To add new todo in the list
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    //To update todo
    const updateTodo = (id, updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
    };


    // to delete the todo
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