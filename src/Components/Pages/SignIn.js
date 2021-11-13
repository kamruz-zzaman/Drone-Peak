import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignIn() {
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (

        <>
            <div className=' w-96 mx-auto py-12 px-10 shadow-xl rounded-xl'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-2xl mb-5 font-bold'>Sign In</p>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("E-mail", { required: true })} placeholder='E-mail' type='email' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("Password", { required: true })} placeholder='Password' type='password' /> <br />
                    <button className='px-3 py-2 rounded-lg bg-green-300 hover:bg-green-500 ' type="submit">Sign In</button>
                    <p>Did not have a account? <Link to='/signup' className='text-blue-500 border-b-2 border-blue-400'>Sign Up</Link></p>
                </form>
            </div>
        </>
    );
}
