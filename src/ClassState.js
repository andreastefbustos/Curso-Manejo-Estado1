import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: true,
            loading: false,
        };
    }

    // not used 
    // componentWillMount()
    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount")
    // };

    // componentDidMount(){
    //     console.log("componentDidMount")
    // };

    componentDidUpdate(){
        console.log("Update")

        if(this.state.loading){
            setTimeout(() => {
                console.log("Verify");
                this.setState({loading: false})
                console.log("End Verify");
            }, 3000);
        }
    };

    render(){
        return (
            <div>
                <h2>Delete {this.props.name}</h2>
                <p>Please enter the security code to verify that you want to delete</p>
                {this.state.error && (
                    <p>Error: Something is wrong</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input placeholder="Security code"/>
                <button
                    onClick={() => this.setState({loading:true})}
                >Verify</button>
            </div>
        );
    }
}

export { ClassState };