import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

    // if(loading){
    //    <Loading></Loading>;
    // }

    const logout = () => {
        signOut(auth);
      };

    const manuItems = <>
        <li><CustomLink className='text-xl' to='/home'>Home</CustomLink></li>
        <li><CustomLink className='text-xl' to='/phones'>Phones</CustomLink></li>
        <li><CustomLink className='text-xl' to='/addphone'>Add Phone</CustomLink></li>
        {
            user ? <li><CustomLink className='text-xl' onClick={logout} to='/login'>Log Out</CustomLink></li>
            :
            <li><CustomLink className='text-xl' to='/login'>Login</CustomLink></li>

        }


    </>


    return (
        <div className="navbar bg-slate-300 py-6 px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl">iPhone Collection</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;