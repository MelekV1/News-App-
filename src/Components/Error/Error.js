import React from 'react';
import "./error.css"
function Error(props) {
    let generator=Math.floor(Math.random()*10)
    console.log(generator)
    return (
        <div className="container">
            {(generator%2)?<img className="error_dev" src={"./ErrorPageImG.png"} alt="Page not Found !"/>:
            <>
            <img className="error_robot" src={"./error.png"} alt="Page not Found !" />
            <h1>we can't the page</h1>
            </>}

        </div>
    );
}

export default Error;

