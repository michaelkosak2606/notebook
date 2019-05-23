import React from 'react';

const overlay = (props) => (

    <div className={`overlay overlay--${props.show ? 'shown' : 'hidden'}`}></div>
)


export default overlay;