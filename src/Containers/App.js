import React, { Component } from "react";
import "../Containers/App.css";
import Persons from "../Components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "vbbd2", name: "Ding", age: 28 },
      { id: "vbbfd", name: "Ding Song", age: 58 },
      { id: "vbb3d", name: "Bing Ding", age: 23 }
    ],
    otherState: "OtherState",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = personKey => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personKey, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursur: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            person={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is Really Working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
