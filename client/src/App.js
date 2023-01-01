import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
