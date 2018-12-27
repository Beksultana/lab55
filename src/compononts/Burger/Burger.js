import React from 'react'

const Burger = props => (
    <div className='Burger'>
        {props.children}
        <p>{props.price}</p>
    </div>
);
export default Burger