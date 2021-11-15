import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const { user } = useAuth();
    // // make hook form respons
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                // make response after post
                if (res.ok) {
                    alert('admin added successfully')
                }
            })
        reset();
    }
    return (
        <>
            <div className='mb-5'>
                <h2 className="text-4xl font-bold text-center my-4 text-gray-700">
                    Make Admin
                </h2>
                <div className='flex justify-center '>
                    <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-green-500 lg:mx-5 lg:w-1/3 p-10 rounded-md bg-green-300'>
                        <div>
                            <p className="text-xl text-left font-bold mb-1">Make Admin</p>
                            <div >
                                <input type="email" id="p-name"{...register("name", { required: true })} className="border-2 focus:ring-2 focus:ring-green-600  px-8 py-1 rounded-xl w-full bg-green-100"
                                    placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='py-2 px-3 rounded-lg border-2 border-green-400 mt-5 hover:bg-green-700 bg-white text-black font-bold'>Make</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;