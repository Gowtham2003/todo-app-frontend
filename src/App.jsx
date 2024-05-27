import { Routes, Route } from "react-router-dom";
import Register from "./page/register";
import Login from "./page/login";
import TodoList from "./page/todo-list";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
