import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import img from '../../../Images/google-logo.png'
import Spinner from "../../Shared/Spinner/Spinner";

export default function SignUp() {

    const { user, registerUser, signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    const { register, handleSubmit, isLoading } = useForm();
    const onSubmit = data => {
        if (data.password !== data.ReEnterPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(data.email, data.password, data.Name, history);
    }
    return (

        <>
            {isLoading && <Spinner />}
            <div className=' w-96 mx-auto py-12 px-10 mb-24 shadow-xl rounded-xl'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-2xl mb-5 font-bold'>Sign Up</p>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("Name")} placeholder='Name' type='text' /> <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("email", { required: true })} placeholder='E-mail' type='email' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("password", { required: true })} placeholder='Password' type='password' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("ReEnterPassword", { required: true })} type='password' placeholder='Re-Enter Password' /> <br />

                    <button className='px-3 py-2 rounded-lg bg-green-300 hover:bg-green-500 ' type="submit">Sign Up</button>
                    <p>Already have a account? <Link to='/signin' className='text-blue-500 border-b-2 border-blue-400'>Sign In</Link></p>
                    {user?.email && <p className='text-green-500'>Login successfully!</p>}
                </form>
                <div>
                    <p className='font-bold'>Or!</p>
                    <button onClick={() => signInWithGoogle(location, history)} className='mx-5 hover:bg-green-300 border-2 border-green-500 py-1 px-7 rounded-3xl'><img className='w-6 inline ' src={img} alt="" /> Continue with Google </button>
                </div>
            </div>
        </>
    );
}
