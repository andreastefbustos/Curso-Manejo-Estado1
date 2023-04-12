import React, { useEffect, useState } from "react";

function UseState({name}){
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Start Effect");

        if(loading){
            setTimeout(() => {
                console.log("Verify");
                setLoading(false);
                console.log("End Verify");
            }, 3000);
        }
        
        console.log("End Effect");
    }, [loading]);

    return (
        <div>
            <h2>Delete {name}</h2>
            <p>Please enter the security code to verify that you want to delete</p>
            {error && (
                <p>Error: Something is wrong</p>
            )}
            {loading && (
                <p>Loading...</p>
            )}
            <input placeholder="Security code"/>
            <button onClick={() => setLoading(true)}>Verify</button>
        </div>
    );
};

export { UseState };
