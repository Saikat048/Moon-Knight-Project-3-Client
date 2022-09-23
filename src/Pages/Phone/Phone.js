import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePhones from '../Hook/CustomHook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Phone = ({phone}) => {

    const { _id, name, img, price } = phone;

    
    const navigate = useNavigate();

    const showDetail = id => {
        navigate(`/phone/${id}`)
    }

    
    // Delete Product 

    const [products, setProducts] = usePhones([]);

    const handleDelete = id => {
        console.log(id) 
        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) { 

            const url = `http://localhost:5000/phones/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                        toast("Deleted")
                    }
                })
        }
    }

    return (
        <div className="card card-compact w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><b>Price</b>: $ {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => showDetail(_id)} className="btn btn-primary">Detail</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Phone;