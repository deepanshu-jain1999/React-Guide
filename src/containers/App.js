import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from "../hoc/WithClass";

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log("[App] inside const.", props );
        this.state = {
        persons: [
            {id: "123", name: "deep", age: 19},
            {id: "234", name: "vishal", age: 14},
            {id: "345", name: "gaurav", age: 16},
        ],
        display: false,
        toggleClicked: 0,
    };
    }
    componentWillMount(){
        console.log("[Apps] inside compo.will.mount");
    }
    componentDidMount(){
        console.log("[Apps] inside compo.Didmount");
    }
    componentWillReceiveProps(nextProps){
        console.log("Update Apps",nextProps);
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("should update Apps", nextProps, nextState);
    //     return (nextState.persons!==this.state.persons
    //         || nextState.display!==this.state.display
    //     );
    // }
    componentWillUpdate(nextProps, nextState){
        console.log("will update", nextProps, nextState);

    }
    componentDidUpdate(){
        console.log("did update");
    }



    deletePersonHandler = (index) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];  // better approach
        persons.splice(index, 1);    //delete index element and 1 means number how many will delete
        this.setState({persons: persons})
    };

    togglePersonHandler = () => {
        const displayValue = this.state.display;
        this.setState((prevState, props)=>{
            return {
                display: !displayValue,
                toggleClicked: prevState.toggleClicked + 1
            }
        })
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
        console.log("[App] inside render");
        let persons = null;
        if (this.state.display){
            persons = (
                <div>
                    <Persons
                     persons={this.state.persons}
                     clicked={this.deletePersonHandler}
                     changed={this.personChangeHandler}/>
                </div>);
        }

    return (
        <WithClass classes={classes.App}>
            <button onClick={() => {this.setState({display: true})}}>show here</button>
            <Cockpit display={this.state.display}
                     persons={this.state.persons}
                     clicked={this.togglePersonHandler}
                     appTitle={this.props.title}/>
            {persons}
        </WithClass>
    );
    //   return React.createElement("div", {className:"App"}, React.createElement("h1", null, "i am going"));
    }
}

export default App;
