import React, { useEffect, useState, useReducer } from "react";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

const reducerObject = (state, payload) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading:false,
        confirmed:true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'WRITE': {
        ...state,
        value: payload,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'DELETE': {
        ...state,
        deleted: true,
    },
    'RESET': {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    }
});

const reducer = (state, action) => {
    //se le pregunta que si dentro de ese objeto existe algun objeto que se llame como action.type[]
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state;
    }
};

function UseReducer({name}){
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    const SECURITY_CODE = "well"

    useEffect(() => {
        console.log("Start Effect");

        if(state.loading){
            setTimeout(() => {
                console.log("Verify");

                if(state.value === SECURITY_CODE){
                    dispatch({
                        type: 'CONFIRM'
                    });
                    //onConfirm();
                } else {
                    dispatch({
                        type: 'ERROR'
                    });
                    //onError();
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
                        dispatch({
                            type: 'WRITE',
                            payload: event.target.value,
                        });
                    }}
                />
                <button onClick={() => {
                    dispatch({
                        type: 'CHECK'
                    });
                }}
                >Verify
                </button>
            </div>
        );
    } else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>Do you want to delete it?</p>
                <button onClick={() => {
                    dispatch({
                        type: 'DELETE'
                    });
                }}>
                    Yes, delete
                </button>
                <button onClick={() => {
                    dispatch({
                        type: 'RESET'
                    });
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
                    dispatch({
                        type: 'RESET'
                    });
                }}>
                    Reset
                </button>
            </React.Fragment>
        );
    };
};

export { UseReducer };
