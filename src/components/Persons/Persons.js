import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log("[Persons] inside cons", props)
    }

    componentWillMount(){
        console.log("[Persons] inside compo.will.mount");
    }
    componentDidMount(){
        console.log("[Persons] inside compo.Didmount");
    }
    componentWillReceiveProps(nextProps){
        console.log("Update Persons",nextProps);
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("should update", nextProps, nextState);
    //     return (nextProps.persons!==this.props.persons
    //         || nextProps.changed!==this.props.changed
    //         || nextProps.clicked!==this.props.clicked
    //     );
    // }
    componentWillUpdate(nextProps, nextState){
        console.log("will update", nextProps, nextState);
        // return true;
    }
    componentDidUpdate(){
        console.log("did update");
    }
    render() {
        console.log("[Persons] inside render");
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        key={person.id}
                        change={(event) => this.props.changed(event, person.id)}
                    />
                );
            })
        )
    }

}
export default Persons