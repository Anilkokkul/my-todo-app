import React, { useState } from 'react';
import "./TodoForm.css"

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task,
      description,
      status: 'Not Completed',
    };
    addTodo(newTodo);
    setTask('');
    setDescription('');
  };
  return (
    <div >
      <form className='Form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;