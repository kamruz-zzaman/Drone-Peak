import React from 'react';
import logo from '../../../Images/logo1.png'
import logo1 from '../../../Images/faveicon.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-green-500">
                {/* nav logo */}
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='w-7' src={logo1} alt="" />
                        <img className='w-32' src={logo} alt="" />
                    </Link>
                    {/* nav item */}
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900">First Link</Link>
                        <Link className="mr-5 hover:text-gray-900">Second Link</Link>
                        <Link className="mr-5 hover:text-gray-900">Third Link</Link>
                        <Link className="mr-5 hover:text-gray-900">Fourth Link</Link>
                    </nav>
                    {/* logo btn */}
                    <Link to='/signin' className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login</Link>
                </div>
            </header>
        </>
    );
};

export default Header;