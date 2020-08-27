import React, { Component } from "react";
import AddToDo from "./AddToDo";
import { FontAwesoneIcons, FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ToDoList extends Component {
  state = {
    toDos: [
      { Id: "1", Title: "Mandar para o Github", Status: "Done" },
      { Id: "2", Title: "Terminar isso", Status: "Pending" },
    ],
  };

deleteToDo = (todo) => {
  const filteredItems = this.state.toDos.filter( x => x.Id !== todo.Id);
  this.setState({
      toDos: filteredItems
  });
};  

addToDo = (todo) => {
  this.setState({
      todos: [...this.State.todos, todo]
  });
}

editToDo = (x) => {
  this.setState(state => ({
    todos: state.toDos.map(todo => {
      if (todo.id === x.Id) {
        return {
          ...todo,
          Status: todo.Status === "Done" ? "Pending" : "Done"
        };
    } else {
          return todo;
        }
        })
    }));
    };

  render() {
    return (
      <div>
        <AddToDo onAdd={this.addToDo}></AddToDo>
        <h1>ToDoList</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.toDos.map((x) => {
              return (
                <tr key={x.Id}>
                  <td>{x.Id}</td>
                  <td>{x.Title}</td>
                  <td style={{ color: x.Status === "Done" ? "green" : "red"}}>{x.Status}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}>
                      <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </span>
                    </button>
                    <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                      <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
