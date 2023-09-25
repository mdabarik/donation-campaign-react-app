import { useRef } from 'react';
import './Banner.css'

const Banner = ({handleFormSubmit}) => {
    const myRef = useRef();
    const handleSubmit = (e) => {
        handleFormSubmit(e, myRef);
    }
    return (
        <div className='h-[500px] container'>
            <img className='absolute top-0 left-0 z-10 w-full h-[600px]' src="donation.jpg" />
            <div className='banner-overlay bg-[#FFFFFFF2] w-full h-[600px] absolute top-0 left-0 z-20'>
                <div className='flex flex-col items-center justify-center h-[600px]'>
                    <h2 className='font-bold text-[20px] md:text-[40px]'>I Grow By Helping People In Need</h2>
                    <div className='mt-5'>

                        <form 
                            onSubmit={handleSubmit} 
                            className='flex flex-col md:flex-row justify-center items-center'>
                            <input ref={myRef} className='rounded-md min-w-[300px] bg-white text-[#0B0B0B66] text-[14px] outline-none border-[1px] border-[#DEDEDE] py-2 px-3' type="text" placeholder='Search here....' />
                            <input className='bg-[#FF444A] fluid min-w-[100px] text-white text-[16px] py-2 px-3 rounded-lg md:rounded-l-none md:rounded-r-lg mt-2 md:mt-0 ml-[-8px] border-[#FF444A]' type="submit" value="Search" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;