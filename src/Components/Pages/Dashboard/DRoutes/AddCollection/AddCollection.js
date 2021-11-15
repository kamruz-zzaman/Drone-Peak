import React from 'react';
import { useForm } from 'react-hook-form';

const AddCollection = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    // // make hook form respons
    const onSubmit = data => {
        fetch('https://enigmatic-woodland-41119.herokuapp.com/drones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                // make response after post
                if (res.ok) {
                    alert('package added successfully')
                }
            })
        reset();
    }
    return (
        <>
            <div className='mb-5'>
                <h2 className="text-4xl font-bold text-center my-4 text-gray-700">
                    Add collection
                </h2>
                <div className='flex justify-center '>
                    <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-green-500 lg:mx-5 lg:w-1/3 p-10 rounded-md bg-green-300'>
                        <div>
                            <p className="text-xl text-left font-bold mb-1">Image Url</p>
                            <div >
                                <input type="text" id="p-name"{...register("Img", { required: true })} className="border-2 focus:ring-2 focus:ring-green-600  px-8 py-1 rounded-xl w-full bg-green-100"
                                    placeholder="url" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl text-left font-bold mb-1">Model Name</p>
                            <div >
                                <input type="text" id="u-name"{...register("Name", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="Model Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <p className="text-xl text-left font-bold mb-1">Description</p>
                            <div>
                                <textarea type="tel" id="contact"{...register("Description", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="Description" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <p className="text-xl text-left font-bold mb-1">Price</p>
                            <div>
                                <input type="tel" id="contact"{...register("Price", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="Price" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className='py-2 px-3 rounded-lg border-2 border-green-400 mt-5 hover:bg-green-700 bg-white text-black font-bold'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCollection;