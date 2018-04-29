import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    let btnClass = "";
    if(props.display){
        btnClass = classes.Red
    }

    const styleClasses = [];
        if (props.persons.length <=2){
            styleClasses.push("Red")
        }
        if (props.persons.length <=1){
            styleClasses.push("Bold")
        }

    return (
        <div className={classes.Cockpit}>
            <h1 className={styleClasses.join(" ")}> {props.appTitle}</h1>
            <button className={btnClass} onClick={props.clicked}>switch name</button>
        </div>
        );
    };

export default cockpit
