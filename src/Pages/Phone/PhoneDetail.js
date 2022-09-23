import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhoneDetail = () => {

    const { phoneId } = useParams(); 

    const [product, setProduct] = useState({}); 

    useEffect(() => {
        const url = `http://localhost:5000/phones/${phoneId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))  

    }, [])



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6">{product.description}</p> 
          </div>
        </div>
      </div>
    );
};

export default PhoneDetail;






