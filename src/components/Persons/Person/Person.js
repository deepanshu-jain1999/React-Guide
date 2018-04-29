import React, {Component} from "react"
import classes from "./Person.css"
import WithClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";


class Person extends Component {
    constructor(props){
        super(props);
        console.log("[Person] inside cons", props)
    }

    componentWillMount(){
        console.log("[Person] inside compo.will.mount");
    }
    componentDidMount(){
        console.log("[Person] inside compo.Didmount");
    }

    render(){
        console.log("[Person] inside render");
        return (
            <WithClass classes={classes.person}>
            <h3 onClick={this.props.click}>i am {this.props.name} and i am {this.props.age} years old</h3>
            <h4>{this.props.children} </h4>
            <input type="text" onChange={this.props.change} value={this.props.name}/>
            </WithClass>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    change: PropTypes.func,
};

export default Person
