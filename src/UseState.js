import React, { useEffect, useState } from "react";

function UseState({name}){
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
    })
    // const [value, setValue] = useState('');
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    console.log(state);

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
};

export { UseState };
