import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: true,
        };
    }
    render(){
        return (
            <di>
                <h2>Delete {this.props.name}</h2>
                <p>Please enter the security code to verify that you want to delete</p>
                {this.state.error && (
                    <p>Error: Something is wrong</p>
                )}
                <input placeholder="Security code"/>
                <button
                    onClick={() => this.setState(prevState => ({error: !prevState.error}))}
                >Verify</button>
            </di>
        );
    }
}

export { ClassState };