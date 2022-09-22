import React from 'react';
import { useForm } from 'react-hook-form';

const AddPhone = () => {


    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {

    //     const url = `https://blooming-refuge-59284.herokuapp.com/products`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             // if (data) {
    //             //     toast('added')
    //             //     setProducts(data);
    //             //     reset();
    //             // }
    //         })
    // }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://fast-lowlands-57075.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // if (data) {
                //     toast('Order success'); 
                //     reset();
                // }
            })

    }


    return (
        // <div>
        // {/* <form className='d-flex flex-column w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
        //     <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        // <textarea className='mb-2' placeholder='Description' {...register("description",)} />
        // <input className='mb-2' placeholder='Photo URL' type="text" {...register("img",)} />
        // <input className='mb-2' placeholder='Price' type="price" {...register("price",)} />
        //     <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier",)} />
        //     <input type="submit" />
        // </form> */}
        // {/* <ToastContainer /> */}
        // </div>

        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-secondary mb-8 font-bold">Add A Phone</h2>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input className='input input-bordered w-full mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        {/* <textarea className='input input-bordered w-full mb-2' placeholder='Description' {...register("description",)} /> */}
                        {/* <input className='input input-bordered w-full mb-2' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} /> */}
                        <textarea className='textarea textarea-bordered w-full mb-2' placeholder='Description' {...register("description",)} />
                        <input className='input input-bordered w-full mb-2' placeholder='Photo URL' type="text" {...register("img",)} />
                        <input className='input input-bordered w-full mb-2' placeholder='Price' type="price" {...register("price",)} /> 
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />

                    </form>
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default AddPhone;