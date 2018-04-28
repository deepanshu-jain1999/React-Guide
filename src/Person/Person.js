import React from "react"
import Radium from "radium"
import "./Person.css"

const person = (props) => {
    const style = {
        "@media (min-width: 500px)": {
            width: "450px",
        }
    };
    return (
        <div className="person" style={style}>
        <h3 onClick={props.click}>i am {props.name} and i am {props.age} years old</h3>
        <h4>{props.children} </h4>
        <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
    };

export default Radium(person)
