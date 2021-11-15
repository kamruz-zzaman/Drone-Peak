import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import HomeProductCard from './HomeProductCard';


const HomeProduct = () => {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-woodland-41119.herokuapp.com/drones')
            .then(res => res.json())
            .then(data => setTimeout(() => { setDrones(data) }, 1000))
    }, [])

    return (
        <>
            {
                drones.length === 0 ? <Spinner></Spinner> : <div className='my-14'>
                    <span className='text-3xl font-bold border-b-2 border-green-500'>Drone Collection</span>
                    <section className="text-gray-600">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap justify-center -m-4">
                                {
                                    drones.slice(0, 6).map(drone =>
                                        <HomeProductCard
                                            key={drone._id}
                                            drone={drone}
                                        >
                                        </HomeProductCard>

                                    )
                                }
                            </div>
                            <button className='py-2 px-3 hover:bg-white hover:text-green-500 bg-green-500 rounded-lg text-white font-normal border-2 hover:border-green-500 mt-5'><Link to='/allproducts'> More Collection..</Link></button>
                        </div>
                    </section>
                </div>
            }
        </>
    );
};

export default HomeProduct;