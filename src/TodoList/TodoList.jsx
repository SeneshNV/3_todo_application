import React, { useState } from "react";
import "./TodoList.css"; // Import CSS file

function TodoList() {
  const [tasks, setTasks] = useState([
    "React",
    "Small MERN project",
    "Portfolio Webpage",
  ]);
  const [newTask, setNewTask] = useState("");

  const storeNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const dltTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const upTask = (index) => {
    if (index > 0) {
      const newTaskList = [...tasks];
      [newTaskList[index], newTaskList[index - 1]] = [
        newTaskList[index - 1],
        newTaskList[index],
      ];
      setTasks(newTaskList);
    }
  };

  const downTask = (index) => {
    if (index < tasks.length - 1) {
      const newTaskList = [...tasks];
      [newTaskList[index], newTaskList[index + 1]] = [
        newTaskList[index + 1],
        newTaskList[index],
      ];
      setTasks(newTaskList);
    }
  };

  return (
    <div className="todo-container">
      <div>
        <h1 className="todo-header">My ToDo List</h1>
        <hr />
      </div>
      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          onChange={storeNewTask}
          value={newTask}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">
          Add Task
        </button>
      </div>
      <ol className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <div className="action-buttons">
              <button onClick={() => dltTask(index)} className="delete">
                Delete
              </button>
              <button onClick={() => upTask(index)} className="up">
                👆
              </button>
              <button onClick={() => downTask(index)} className="down">
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
