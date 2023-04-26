import React, { useEffect, useState } from "react";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

function UseState({name}){
    const [state, setState] = useState(initialState)

    const SECURITY_CODE = "well"

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading:false,
            confirmed:true,
        })
    };

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading:false,
        })
    };

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        })
    };

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    };

    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        })
    };

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        })
    };

    console.log(state);

    useEffect(() => {
        console.log("Start Effect");

        if(state.loading){
            setTimeout(() => {
                console.log("Verify");

                if(state.value === SECURITY_CODE){
                    onConfirm();
                } else {
                    onError();
                }
                
                console.log("End Verify");
            }, 3000);
        }
        
        console.log("End Effect");
    }, [state.loading]);

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
                        onWrite(event.target.value)
                    }}
                />
                <button onClick={onCheck}>
                    Verify
                </button>
            </div>
        );
    } else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>Do you want to delete it?</p>
                <button onClick={() => {
                    onDelete()
                }}>
                    Yes, delete
                </button>
                <button onClick={() => {
                    onReset()
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
                    onReset()
                }}>
                    Reset
                </button>
            </React.Fragment>
        );
    };
};

export { UseState };
