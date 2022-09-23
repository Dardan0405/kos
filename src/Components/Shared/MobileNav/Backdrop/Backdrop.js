import React from 'react';
import './backdrop.css';

const Backdrop = (props) => {
    return (
        <div className='nav-backdrop' onClick={props.click}></div>
    )
}

export default Backdrop