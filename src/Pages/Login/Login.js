import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold mb-8">Log In</h2>
                    <form >
                        <label>Email</label>
                        <input   type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <label>Password</label>
                        <input  type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form> 
                    <p>Don't have with me? <Link to='/signup' className='text-secondary hover:underline'>Sign Up</Link></p>
                    <p   className='text-secondary cursor-pointer hover:underline'>Forgot password?</p>
                    <div className="divider">OR</div>
                    <button className="btn btn-primary">Continue With Google</button>
                </div>
            </div>
        </div> 
    );
};

export default Login;