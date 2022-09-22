import React from 'react';
import usePhones from '../Hook/CustomHook';
import Phone from './Phone';

const Phones = () => {
    const [phones] = usePhones();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 mt-10 mb-20'>
                {
                    phones.map(phone => <Phone key={phone._id} phone={phone}></Phone>)
                }
            </div> 
        </div>
    );
};

export default Phones;