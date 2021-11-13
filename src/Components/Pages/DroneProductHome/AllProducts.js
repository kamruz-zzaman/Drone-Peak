import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import HomeProductCard from './HomeProductCard';


const AllProducts = () => {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/drones')
            .then(res => res.json())
            .then(data => setDrones(data))
    }, [])

    return (
        <>
            {drones.length === 0 ? <Spinner></Spinner> : <div className='my-14'>
                <span className='text-3xl font-bold border-b-2 border-green-500'>Drone Collection</span>
                <section className="text-gray-600">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap justify-center -m-4">
                            {
                                drones.map(drone =>
                                    <HomeProductCard
                                        key={drone._id}
                                        drone={drone}
                                    >
                                    </HomeProductCard>

                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
            }
        </>

    );
};

export default AllProducts;