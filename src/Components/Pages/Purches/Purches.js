import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../../Shared/Spinner/Spinner';
import PurchesForm from '../PurchesForm/PurchesForm';

const Purches = () => {
    const { id } = useParams();
    const [purchesDrone, setPurchesDrone] = useState([]);
    // fetching packages by id
    useEffect(() => {
        fetch(`http://localhost:5000/drones/${id}`)
            .then(res => res.json())
            .then(data => setTimeout(() => { setPurchesDrone(data) }, 1000))
    }, []);

    const { Img, Name, Description, Price } = purchesDrone;
    return (
        <>{
            purchesDrone._id !== id ? <Spinner></Spinner> :
                <section className="text-gray-600 body-font overflow-hidden">
                    <span className='text-3xl font-bold border-b-2 border-green-500'>Details</span>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Img} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{Name}</h1>
                                <p className="leading-relaxed">{Description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                </div>
                                <div className="flex justify-center">
                                    <span className="title-font font-medium text-2xl text-gray-900">Tk. {Price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PurchesForm
                        data={purchesDrone}
                    ></PurchesForm>
                </section>
        }
        </>
    );
};

export default Purches;