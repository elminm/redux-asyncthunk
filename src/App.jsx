import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import TodoLength from "./pages/TodoLength";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./slices/todoSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData('https://jsonplaceholder.typicode.com/todos'))
  }, [])
  return (
    <>
      <ul>
        <li>
          <Link to="/"> Homepage</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="favorites"> Favorites</Link>
        </li>
        <li>
          <Link to="todos">Todos</Link>
        </li>
        <li>
          <Link to="todo/length">Todo Length</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todo/length" element={<TodoLength />} />
      </Routes>
    </>
  );
}

export default App;
