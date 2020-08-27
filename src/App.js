import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPlus, faEdit);

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
