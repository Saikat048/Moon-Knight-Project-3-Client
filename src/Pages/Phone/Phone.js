import React from 'react';

const Phone = ({phone}) => {

    const { _id, name, img, price } = phone;

    return (
        <div className="card card-compact w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><b>Price</b>: $ {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Detail</button>
                    <button className="btn btn-primary">Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Phone;