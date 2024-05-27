import React from "react";
import axios from "axios";

const TodoItem = ({ token, todo, fetchTodos }) => {
  const toggleComplete = async () => {
    try {
      await axios.put(
        `https://todo-backend-example.onrender.com/api/todos/${todo._id}`,
        {
          ...todo,
          completed: !todo.completed,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchTodos();
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(
        `https://todo-backend-example.onrender.com/api/todos/${todo._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchTodos();
    } catch (error) {
      console.error(
        "Error deleting todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded mb-2">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </div>
      <button onClick={deleteTodo} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
