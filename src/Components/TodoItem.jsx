import React, { useState } from 'react';
import "./TodoItem.css"

function TodoItem({ todo, updateTodo, deleteTodo }) {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);
    const [editedDescription, setEditedDescription] = useState(
        todo.description
    );
    const statusOptions = ['Not Completed', 'Completed']

    // To handle the status change
    const handleStatusChange = (NewStatus) => {
        const updatedTodo = { ...todo, status: NewStatus };
        updateTodo(updatedTodo.id, updatedTodo);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    //To save the edited content 
    const handleSave = () => {
        const updatedTodo = { ...todo, task: editedTask, description: editedDescription };
        updateTodo(updatedTodo.id, updatedTodo);
        setEditing(false);
    };



    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <div className="todo-card">
            {editing ? (
                <div className='editTask'>
                    <label>Task Name:</label>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <label>Task Description:</label>
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button className='updatebtn' onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div className='Card'>
                    <p><b>Task Name :</b>{todo.task}</p>
                    <p style={{ maxHeight: "85px" }}><b>Task Description:</b> {todo.description}</p>
                    <p><b>Status:</b> <select style={{ background: todo.status === "Completed" ? "green" : "red" }} value={todo.status} onChange={(e) => handleStatusChange(e.target.value)}>
                        {statusOptions.map((option) => (
                            <option key={option} value={option}>{option === "Not Completed" ? "Not Completed" : "Completed"}</option>
                        ))}</select></p>
                    <div className='buttons'>
                        <button className='updatebtn' onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;