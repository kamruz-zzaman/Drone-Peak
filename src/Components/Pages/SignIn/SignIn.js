import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import img from '../../../Images/google-logo.png'
import Spinner from "../../Shared/Spinner/Spinner";

export default function SignIn() {
    const location = useLocation();
    const history = useHistory();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
    }

    return (

        <>
            {isLoading && <Spinner />}
            <div className=' w-96 mx-auto py-12 px-10 mb-24 shadow-xl rounded-xl'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <p className='text-2xl mb-5 font-bold'>Sign In</p>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("email", { required: true })} placeholder='E-mail' type='email' /> <br />
                    <input className='border-2 mb-5 p-2 rounded-md w-80' {...register("password", { required: true })} placeholder='Password' type='password' /> <br />
                    <button className='px-3 py-2 rounded-lg bg-green-300 hover:bg-green-500 ' type="submit">Sign In</button>
                    <p>Did not have a account? <Link to='/signup' className='text-blue-500 border-b-2 border-blue-400'>Sign Up</Link></p>
                    {user?.email && <p className='text-green-500'>Login successfully!</p>}
                    {authError && <p className='text-red-500'>{authError}</p>}
                </form>
                <div>
                    <p className='font-bold'>Or!</p>
                    <button onClick={signInWithGoogle} className='mx-5 hover:bg-green-300 border-2 border-green-500 py-1 px-7 rounded-3xl'><img className='w-6 inline ' src={img} alt="" /> Continue with Google </button>
                </div>
            </div>
        </>
    );
}
