import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import OrderCurd from './OrderCurd';

const Order = () => {
    const [orders, SetOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://enigmatic-woodland-41119.herokuapp.com/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => SetOrders(data));
        setIsLoading(false)
    }, []);
    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`https://dark-tomb-38660.herokuapp.com/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delet successfully')
                        const remainingBooking = orders.filter(booking => booking._id !== id)
                        SetOrders(remainingBooking)
                    }
                })
        }
    }
    return (
        <div className='container mx-auto'>
            <span className='text-3xl font-bold text-gray-700 border-b-2 '>Your Order </span>
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
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>

                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        orders.map(order =>
                                            <OrderCurd
                                                order={order}
                                                deletStatus={handleDeletUser}
                                            >
                                            </OrderCurd>

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
export default Order;