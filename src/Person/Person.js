import React from "react"
import "./Person.css"

const person = (props) => {
    return (
        <div className="person">
        <h3 onClick={props.click}>i am {props.name} and i am {props.age} years old</h3>
        <h4>{props.children} </h4>
        <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
    };

export default person
