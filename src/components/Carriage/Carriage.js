import React from 'react';
import './Carriage.css'

const Carriage = ({ carriage }) => {
    console.log(carriage);
    return (
        <div className='carriage'>
            <h3>Carriage</h3>
            <h4>Item Amount:{carriage.length}</h4>
        </div>
    );
};

export default Carriage;