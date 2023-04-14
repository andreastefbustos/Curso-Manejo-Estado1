import React, { useEffect, useState } from "react";

function UseState({name}){
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })
    // const [value, setValue] = useState('');
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    console.log(state);
    console.log(state.deleted);
    console.log(state.confirmed);

    const SECURITY_CODE = "well"

    useEffect(() => {
        console.log("Start Effect");

        if(state.loading){
            setTimeout(() => {
                console.log("Verify");

                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error: false,
                        loading:false,
                        confirmed:true,
                    })
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading:false,
                    })
                }
                
                console.log("End Verify");
            }, 3000);
        }
        
        console.log("End Effect");
    }, [state.loading]);

    //se puede guardar el return dentro de condicionales
    //el primer bloque va ser el estado inial 
    if(!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Delete {name}</h2>
                <p>Please enter the security code to verify that you want to delete</p>
                {(state.error && !state.loading) && (
                    <p>Error: Something is wrong</p>
                )}
                {state.loading && (
                    <p>Loading...</p>
                )}
                <input 
                    placeholder="Security code"
                    value={state.value}
                    onChange={(event) => {
                        setState({
                            ...state,
                            value: event.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    setState({
                        ...state,
                        loading: true
                        })
                    }
                }
                >Verify
                </button>
            </div>
        );
    } else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>Do you want to delete it?</p>
                <button onClick={() => {
                    setState({
                        ...state,
                        deleted: true,
                    })
                }}>
                    Yes, delete
                </button>
                <button onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        value: '',
                    })
                }}>
                    No, return
                </button>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <p>Deleted Successfully</p>
                <button onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: '',
                    })
                }}>
                    Reset
                </button>
            </React.Fragment>
        );
    };
};

export { UseState };
