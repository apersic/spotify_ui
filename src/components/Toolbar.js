import React from 'react'

const Toolbar = () => {
    return(
        <div className="Toolbar">
            <div className="navButtons">
                <div className="toolbarButton">
                <svg viewBox="0 0 24 24" class="_6be6d9f3103325b95e6d4c0f6b10b783-scss">
                    <path fill="currentColor" d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"></path>
                </svg>
                </div>
                <div className="toolbarButton" id="backButton">
                <svg viewBox="0 0 24 24" class="_6be6d9f3103325b95e6d4c0f6b10b783-scss">
                    <path fill="currentColor" d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"></path>
                </svg>
                </div>
            </div>
            <div className="userButtons">
                <button className="signupButton">SIGN UP</button>
                <button className="loginButton">LOG IN</button>
            </div>
        </div>
    )
}

export default Toolbar