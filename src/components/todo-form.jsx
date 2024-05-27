import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ token, fetchTodos }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://todo-backend-example.onrender.com/api/todos",
        { title },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTitle("");
      fetchTodos();
    } catch (error) {
      console.error(
        "Error creating todo:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="New Todo"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded mt-2"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
