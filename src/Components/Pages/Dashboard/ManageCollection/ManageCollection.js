import React, { useEffect, useState } from 'react';
import ManageProductCurt from './ManageProductCurt';

const ManageCollection = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-woodland-41119.herokuapp.com/drones')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`https://enigmatic-woodland-41119.herokuapp.com/drones/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delet successfully')
                        const remainingBooking = product.filter(booking => booking._id !== id)
                        setProduct(remainingBooking)
                    }
                })
        }
    }
    return (

        <div className='container mx-auto lg:w-1/2'>
            <span className='text-3xl font-bold text-gray-700 border-b-2 '>Manage Collection </span>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Manage
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        product.map(products =>
                                            <ManageProductCurt
                                                key={products._id}
                                                products={products}
                                                deletStatus={handleDeletUser}
                                            >
                                            </ManageProductCurt>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageCollection;