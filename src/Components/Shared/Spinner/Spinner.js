import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (
        <div className="half-circle-spinner w-full mx-auto my-80 ">
            <div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    );
};

export default Spinner;