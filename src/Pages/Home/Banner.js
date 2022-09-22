import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full mb-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://news.maxabout.com/wp-content/uploads/2022/09/Apple-iPhone-14-Price-List-India-scaled.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div className='text-center text-primary'>
                    <h1 className='text-5xl font-bold mb-2'>C&A TOOLS</h1>
                    <h3 className='text-3xl font-bold'>HARDWARE-TOOLS FACTORY</h3>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9d0931ab3d4e7c10/631934dd2bb66a2aab0a8f56/wi-20220907-feature-iphone-14-pro-s.jpg?width=2877&quality=80&auto=webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className='text-center text-primary'>
                        <h1 className='text-5xl font-bold MT-2'>C&A TOOLS</h1>
                        <h3 className='text-3xl font-bold'>SINCE 1980</h3>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;