import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (

        <>
            <div className=' w-96 mx-auto py-12 px-10 shadow-xl rounded-xl'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-2xl mb-5 font-bold'>Sign Up</p>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("Name")} placeholder='Name' type='text' /> <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("E-mail", { required: true })} placeholder='E-mail' type='email' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("Password", { required: true })} placeholder='Password' type='password' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("Re-Enter Password", { required: true })} type='password' placeholder='Re-Enter Password' /> <br />

                    <button className='px-3 py-2 rounded-lg bg-green-300 hover:bg-green-500 ' type="submit">Sign Up</button>
                    <p>Already have a account? <Link to='/signin' className='text-blue-500 border-b-2 border-blue-400'>Sign In</Link></p>
                </form>
            </div>
        </>
    );
}
