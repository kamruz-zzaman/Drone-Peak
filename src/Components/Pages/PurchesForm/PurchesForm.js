import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const PurchesForm = (props) => {
    const { Name, Price } = props.data;
    const { user } = useAuth();
    const { register, handleSubmit, reset, setValue } = useForm();
    // // make hook form respons
    const onSubmit = data => {
        fetch('https://enigmatic-woodland-41119.herokuapp.com/order', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.ok) {
                    alert('Your Booking Now on Pending')
                }
            })
        reset();
    }
    return (
        <>
            <div className='mb-5'>
                <h2 className="text-4xl font-bold text-center my-4 text-gray-700">
                    Confirm Your Order
                </h2>
                <div className='flex justify-center '>
                    <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-green-500 lg:mx-5 lg:w-1/3 p-10 rounded-md bg-green-300'>
                        <div>
                            <p className="text-xl text-left font-bold mb-1">Drone  Model</p>
                            <div >
                                <input value={Name} type="text" id="p-name"{...register("Model", { required: true })} className="border-2 focus:ring-2 focus:ring-green-600  px-8 py-1 rounded-xl w-full bg-green-100"
                                    placeholder="Package Name" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl text-left font-bold mb-1">Your-Name</p>
                            <div >
                                <input value={user.displayName} type="text" id="u-name"{...register("Name", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <p className="text-xl text-left font-bold mb-1">Phone-Number</p>
                            <div>
                                <input type="tel" id="contact"{...register("PhoneNumber", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="+880-" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <p className="text-xl text-left font-bold mb-1">Location</p>
                            <div>
                                <input type="text" id="contact"{...register("locaton", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="location" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <p className="text-left text-xl font-bold mb-1">E-mail</p>
                            <div>
                                <input value={user.email} type="e-mail" id="mail"{...register("Email")} className="border-2  px-8 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100"
                                    placeholder="Something@click.com" />
                            </div>
                        </div>
                        <div >
                            <p className="text-left text-xl font-bold mb-1">
                                Price
                            </p>
                            <div >
                                <input value={Price} id="time"{...register("Price", { required: true })} className="border-2  px-10 py-1 rounded-xl w-full focus:ring-2 focus:ring-green-600 bg-green-100" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='py-2 px-3 rounded-lg border-2 border-green-400 mt-5 hover:bg-green-700 bg-white text-black font-bold'>Confirm</button>
                        </div>
                        {/* set default data */}
                        {setValue("Status", "Pending")}
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchesForm;