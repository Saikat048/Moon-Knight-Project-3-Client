import React from 'react';
import { Link } from 'react-router-dom';
import usePhones from '../Hook/CustomHook';
import Phone from './Phone';
import { BsArrowRight } from 'react-icons/bs';
import './Homephones.css'

const Homephones = () => {
    const [phones] = usePhones();

    return (
        <div className='px-16 mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-primary mb-8'>Popular Collection</h1>
            <hr className='text-primary hr' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    phones.slice(0, 6).map(phone => <Phone key={phone._id} phone={phone}></Phone>)
                }
            </div>
            <div className='flex items-center mt-16'>
                <Link className='text-2xl text-primary font-bold hover:underline' to="/phones">See All Phones </Link>
                <span className='ml-3 text-2xl text-primary font-bold'><BsArrowRight></BsArrowRight></span>
            </div>
        </div>
    );
};

export default Homephones;