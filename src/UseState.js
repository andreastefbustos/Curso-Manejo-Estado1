import React, { useEffect, useState, useReducer } from "react";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    write: 'WRITE',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET'
}

const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading:false,
        confirmed:true,
    },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.write]: {
        ...state,
        value: payload,
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
    },
    [actionTypes.reset]: {
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

    const onConfirm = () => {
        dispatch({
            type: actionTypes.confirm
        })
    };

    const onError = () => {
        dispatch({
            type: actionTypes.error
        })
    };

    const onWrite = (event) => {
        dispatch({
            type: actionTypes.write,
            payload: event.target.value,
        })
    };

    const onCheck = () => {
        dispatch({
            type: actionTypes.check
        })
    };

    const onDelete = () => {
        dispatch({
            type: actionTypes.delete
        })
    };

    const onReset = () => {
        dispatch({
            type: actionTypes.reset
        })
    };

    console.log(state);

    const SECURITY_CODE = "well"

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
                    onChange={onWrite}
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
                <button onClick={onDelete}>
                    Yes, delete
                </button>
                <button onClick={onReset}>
                    No, return
                </button>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <p>Deleted Successfully</p>
                <button onClick={onReset}>
                    Reset
                </button>
            </React.Fragment>
        );
    };
};

export { UseReducer };
