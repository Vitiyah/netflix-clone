import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
