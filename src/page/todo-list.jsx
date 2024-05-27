import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "../components/todo-item";
import TodoForm from "../components/todo-form";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
    return null;
  }
  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://todo-backend-example.onrender.com/api/todos",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTodos(response.data);
    } catch (error) {
      console.error(
        "Error fetching todos:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Todo List</h2>
      <TodoForm token={token} fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          token={token}
          todo={todo}
          fetchTodos={fetchTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
