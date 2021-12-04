import React from 'react';
import img from '../../../../../Images/makePayment.svg'

const MakePayment = () => {
    return (
        <div>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h1 className='text-4xl font-bold text-gray-700'>Payment method Coming Soon..</h1>
        </div>
    );
};

export default MakePayment;