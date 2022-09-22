import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold mb-8">Sign Up</h2>
                <form > 
                    <label>Email</label>
                    <input  type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-3 mt-1"required />

                    <label>Password</label>
                    <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-3 mt-1" required/>

                    <label>Confirm Password</label>
                    <input   type="password" placeholder="Your Confirm Password" className="input input-bordered w-full max-w-xs mb-3 mt-1" required/>
 
                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs mb-2" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary hover:underline'>Please log In</Link></p>
                
            </div>
        </div>
    </div>
    );
};

export default Signup;