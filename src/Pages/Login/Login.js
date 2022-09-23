import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import Loading from '../Share/Loading'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
 
    const [signInWithGoogle, gUser, gLoading ] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail( auth );
 
    const navigate = useNavigate();
    const location = useLocation(); 


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    // form submit 
    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    
    if(loading || gLoading){
        return <Loading></Loading>
    }

  
    const from = location.state?.from?.pathname || "/";

    if(user || gUser){ 
        navigate(from, { replace: true });
    }

    
    // reset password 
 
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
      } 

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold mb-8">Log In</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label>Email</label>
                        <input onBlur={handleEmailBlur}  type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <label>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                    <ToastContainer />
                    <p>Don't have with me? <Link to='/signup' className='text-secondary hover:underline'>Sign Up</Link></p>
                    <p onClick={resetPassword} className='text-secondary cursor-pointer hover:underline'>Forgot password?</p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary">Continue With Google</button>
                </div>
            </div>
        </div> 
    );
};

export default Login;