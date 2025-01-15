import React from 'react';
import PanaImage from "../../assets/pana.png"

const BecomeTutorSecondBanner = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row lg: justify-center items-center  max-w-screen-lg'>
            <div className='w-full md:w-1/2 lg:w-1/2 '>
                <img
                className='mx-auto rounded-lg '
                src={PanaImage} alt="" />
            </div>
            <div style={{background:"#FF725E0F"}} className=' rounded-lg h-full py-10 '>
                <h2 className='text-3xl bold p-3'>Accelerate Your Tutoring Growth</h2>
                <p className='p-3 text-gray-700 text-xl'>Expand your tutoring practice quickly by leveraging our platform's tools and resources. <br /> With access to a large student base, streamlined matchmaking, and dedicated support, you <br /> can rapidly build your reputation, increase your visibility, and grow your client base.</p>
            </div>
        </div>
    );
};

export default BecomeTutorSecondBanner;