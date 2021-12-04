import React from 'react';
import logo from '../../../Images/logo1.png'
import logo1 from '../../../Images/faveicon.jpg'
import logo2 from '../../../Images/drone.png'

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font bg-gray-100 ">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <img src={logo2} alt="" />
                        <p>We make your special moments more special.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First delevery</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Quick Responce</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Product on your door</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Save money</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Found</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Admin author</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Make payment</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Trasted</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Future </a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Our Thots</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">get touch</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">info</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Location</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Need help?</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">faq?</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">our support session</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">services</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">good product</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-green-500">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 dronepeak —
                            <span className="text-gray-600 ml-1" >@dronepeak</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <img className='w-5' src={logo1} alt="" />
                            <img className='w-24' src={logo} alt="" />
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;