import React from "react";

class ClassState extends React.Component{
    render(){
        return (
            <di>
                <h2>Delete ClassState</h2>
                <p>Please enter the security code to verify that you want to delete</p>
                <input placeholder="Security code"/>
                <button>Verify</button>
            </di>
        );
    }
}

export { ClassState };