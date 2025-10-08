import React from 'react';
import apperr from '../assets/App-Error.png';
const AppError = () => {
    return (
        <div className='bg-[#CCE1F7] w-full mx-auto items-center'>
            <img className="mx-auto" src={apperr} alt="" />
            <h2 className="text-5xl font-semibold text-center mt-3">Oops, page not found!</h2>
            <p className="text-center text-gray-400 mt-3 pb-7">The page you are looking for is not available.</p>
        </div>
    );
};

export default AppError;