import React, { useEffect, useState } from "react";

function UseState({name}){
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(value);

    const SECURITY_CODE = "well"

    useEffect(() => {
        console.log("Start Effect");

        if(loading){
            setTimeout(() => {
                console.log("Verify");

                if(value === SECURITY_CODE){
                    setLoading(false);
                    setError(false);
                } else {
                    setError(true);
                    setLoading(false);
                }
                
                console.log("End Verify");
            }, 3000);
        }
        
        console.log("End Effect");
    }, [loading]);

    return (
        <div>
            <h2>Delete {name}</h2>
            <p>Please enter the security code to verify that you want to delete</p>
            {(error && !loading) && (
                <p>Error: Something is wrong</p>
            )}
            {loading && (
                <p>Loading...</p>
            )}
            <input 
                placeholder="Security code"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button onClick={() => setLoading(true)}>Verify</button>
        </div>
    );
};

export { UseState };
