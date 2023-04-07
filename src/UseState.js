import React, { useState } from "react";

function UseState({name}){
    const [error, setError] = useState(true);
    return (
        <di>
            <h2>Delete {name}</h2>
            <p>Please enter the security code to verify that you want to delete</p>
            {error && (
                <p>Error: Something is wrong</p>
            )}
            <input placeholder="Security code"/>
            <button onClick={() => setError(!error)}>Verify</button>
        </di>
    );
};

export { UseState };
