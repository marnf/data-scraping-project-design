import React from 'react';
import TenderCardLogo from "../../assets/tenderwiseicons/TenderCardLogo.png"
import searchIcon from "../../assets/tenderwiseicons/searchIcon.png"
import TenderWiseSidebarModal from "./TenderWiseSidebarModal.jsx"
import { Pagination } from 'antd';

const CardsSector = () => {


    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    }


    return (

        <section section className="bg-white shadow-md rounded-md p-8" >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Free Tenders
            </h2>
            <div className="relative flex items-center w-1/3 mb-6">
                {/* Left-side Image Container */}
                <div className="absolute left-4 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <img src={searchIcon} alt="Icon" className="w-4 h-4" />
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Write Tender keywords"
                    className="flex-1 border border-gray-300 rounded-full pl-16 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

            </div>


            <div className='flex gap-9'>
                <div>
                    <TenderWiseSidebarModal></TenderWiseSidebarModal>
                </div>
                <div className='container mx-auto'>
                    <div className="space-y-6  ">
                        <div className="p-6 bg-gray-50 mx-8 border mx-5 rounded-md shadow-md space-y-3">
                            <h3 className="text-lg mb-6 text-center font-semibold text-gray-800 ">
                                Land development works along the new water transmission pipeline
                            </h3>
                            <div className="w-full flex md:gap-40 text-left items-center">
                                <div className="w-1/2 text-left">
                                    <div className="flex justify-between">
                                        <p className="text-gray-600">Tender ID:</p>
                                        <p className="text-gray-600">102039</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-gray-600">Closing date:</p>
                                        <p className="text-gray-600">25 August 2024</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-gray-600">Region:</p>
                                        <p className="text-gray-600">Dhaka</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <img src={TenderCardLogo} alt="" className="w-36 h-28" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="mt-4 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-blue-700">
                                    View Details -&gt;
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="my-3 flex justify-center">
                        <Pagination total={500} itemRender={itemRender} />
                    </div>
                </div>
            </div>




        </section >
    );
};

export default CardsSector;