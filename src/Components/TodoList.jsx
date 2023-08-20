import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, updateTodo, deleteTodo }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") {
      return todo.status === "Completed";
    } else if (filter === "Not Completed") {
      return todo.status === "Not Completed";
    }
    return true;
  });

  return (
    <div>
      <label>Filter by Status:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      <div className="TodoList">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
