import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "well"
class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            error: false,
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
                
                if(this.state.value === SECURITY_CODE){
                    this.setState({error: false, loading: false})
                } else {
                    this.setState({error: true, loading: false})
                }

                console.log("End Verify");
            }, 3000);
        }
    };

    render(){
        return (
            <div>
                <h2>Delete {this.props.name}</h2>
                <p>Please enter the security code to verify that you want to delete</p>
                {(this.state.error && !this.state.loading) && (
                    <p>Error: Something is wrong</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input
                    placeholder="Security code"
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                    }}
                />
                <button
                    onClick={() => this.setState({loading:true})}
                >Verify</button>
            </div>
        );
    }
}

export { ClassState };