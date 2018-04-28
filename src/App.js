import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: "deep", age: "19"},
            {name: "vishal", age: "14"},
            {name: "gaurav", age: "16"},
        ]
    };
    switchNameHandler = (name) => {
        // console.log("clicked")
        // Do not use: this.state.persons[0].name ="deepanshu"
        this.setState({persons: [
            {name: name, age: "19"},
            {name: "vishal", age: "15"},
            {name: "gaurav", age: "17"},
        ]})
    };

    inputHandler = (event) => {
        this.setState({persons: [
            {name: "deep", age: "19"},
            {name: event.target.value, age: "15"},
            {name: "gaurav", age: "17"},
        ]})
    };
  render() {
      const style = {
          backgroundColor: "white",
          font: "inherit",
          border
      };

    return (
      <div className="App">
          <h1> i am going to start react</h1>
          <button style={style} onClick={this.switchNameHandler.bind(this, "ddepak")}>switch name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>
              ohh really</Person>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={ this.switchNameHandler.bind(this, "deepu")}
              change={this.inputHandler}/>

          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement("div", {className:"App"}, React.createElement("h1", null, "i am going"));
  }
}

export default App;
