import { RouterProvider } from "react-router-dom";
import { Routes } from "@src/routes";
import "./styles/global.css";

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
