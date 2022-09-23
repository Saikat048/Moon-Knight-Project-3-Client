import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';

const Signup = () => {


    
    const [createUserWithEmailAndPassword,  user, loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if(loading){
        return <Loading></Loading>
    }


    // form submit 
    const handleFormSubmit = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not match')
            return;
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters or more...');
            return;
         }

         createUserWithEmailAndPassword(email, password);
         
        //  email verification 
         sendEmailVerification()
    }

    if(user){
        navigate('/home')
    }




    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold mb-8">Sign Up</h2>
                <form onSubmit={handleFormSubmit}> 
                    <label>Email</label>
                    <input onBlur={handleEmailBlur}  type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-3 mt-1"required />

                    <label>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-3 mt-1" required/>

                    <label>Confirm Password</label>
                    <input  onBlur={handleConfirmPasswordBlur}  type="password" placeholder="Your Confirm Password" className="input input-bordered w-full max-w-xs mb-3 mt-1" required/>
 
                    <p className='text-red-500'>{error}</p>
                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs mb-2" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary hover:underline'>Please log In</Link></p>
                
            </div>
        </div>
    </div>
    );
};

export default Signup;