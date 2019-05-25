import React from 'react';

const overlay = (props) => (

    <div
        className={`overlay overlay--${props.show ? 'shown' : 'hidden'}`}
        onClick={props.onCLickHandler}
    ></div>
)


export default overlay;