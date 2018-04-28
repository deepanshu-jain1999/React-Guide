import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium"
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {id: "123", name: "deep", age: "19"},
            {id: "234", name: "vishal", age: "14"},
            {id: "345", name: "gaurav", age: "16"},
        ],
        display: false,
    };
    deletePersonHandler = (index) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];  // better approach
        persons.splice(index, 1);    //delete index element and 1 means number how many will delete
        this.setState({persons: persons})

    };
    togglePersonHandler = () => {
        this.setState({display: !this.state.display})
    };

    personChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p)=> {
            return id===p.id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };
  render() {
      const style = {
          backgroundColor: "green",
          font: "inherit",
          padding: "20px",
          ":hover": {
              backgroundColor: "lightgreen",
              padding: "30px",
          }

      };
      let persons = null;
      if (this.state.display){
          persons = (
          this.state.persons.map((person, index) =>{
             return (<Person
                 name={person.name}
                 age={person.age}
                 click={() => this.deletePersonHandler(index)}
                 key={person.id}
                 change={(event) => this.personChangeHandler(event, person.id)}
                 />
             );
          })
      );
          style.backgroundColor = "red";
          style[":hover"].backgroundColor = "blue";
      }
      const classes = [];
      if (this.state.persons.length <=2){
          classes.push("red")
      }
      if (this.state.persons.length <=1){
          classes.push("bold")
      }



    return (
        <StyleRoot>
      <div className="App">
          <h1 className={classes.join(" ")}> i am going to start react</h1>
          <button style={style} onClick={this.togglePersonHandler}>switch name</button>
          {persons}
      </div>
        </StyleRoot>
    );
    //   return React.createElement("div", {className:"App"}, React.createElement("h1", null, "i am going"));
  }
}

export default Radium(App);
