import React from 'react'

const Greeting =({name,message})=>{
    name = name || 'Guest';
    message = message || 'Welcome to our website';
    return(
        <div>
            <h2>Hello,{name}!</h2>
            <p>{message}</p>
        </div>
    );
};

export default Greeting;