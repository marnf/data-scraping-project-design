import React from 'react';
import bannerImage from "../../assets/image 33.png"
import icon from "../../assets/Vector.png"
import icon1 from "../../assets/group.png"
import icon2 from "../../assets/Vector (2).png"
import icon3 from "../../assets/Vector (3).png"

const Contact = () => {
    return (
        <div className="bg-white text-white min-h-[80svh] custom-min-height md:min-h-svh lg:min-h-svh flex flex-col items-center p-0 md:p-6 lg:p-6 mb-1 ">
            {/* Title */}
            <h2 className="text-3xl font-bold text-black mb-4">Contact us</h2>
            <p className="text-sm md:text-xl text-center text-gray-400 mb-8">
                Connect with us to experience seamless communication. We value open dialogue <br /> and are eager to engage with you.
                Whether you have questions, ideas, or feedback, we are here to listen and respond.
            </p>

            {/* Image Section */}
            <div className="relative w-full mb-16">
                <img
                    src={bannerImage}
                    alt="Contact"
                    className="rounded-lg shadow-lg mx-auto w-full md:max-w-screen-md "
                />

                {/* Card Container */}
                <div className="absolute  -bottom-80 md:-bottom-28 lg:-bottom-28 left-1/2 transform -translate-x-1/2 w-full flex justify-center     ">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {/* Contact */}
                        <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center w-full">
                            <img
                                src={icon}
                                alt="Contact"
                                className="rounded-lg shadow-lg mx-auto max-w-screen-md"
                            />
                            <h3 className="font-bold my-2">Contact</h3>
                            <div className="py-2">
                                <p className="text-sm md:text-xl text-sm text-gray-400">Mobile: (+88) - 0000 - 1111</p>
                                <p className="text-sm md:text-xl text-sm text-gray-400">Hotline: 12345 - 2233</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center w-full">
                            <img
                                src={icon1}
                                alt="Contact"
                                className="rounded-lg shadow-lg mx-auto max-w-screen-md h-10 mb-4"
                            />
                            <h3 className="font-bold my-2">Email</h3>
                            <div className="py-2">
                                <p className="text-sm md:text-xl text-sm text-gray-400">emaex ample.com</p>
                                <p className="text-sm md:text-xl text-sm text-gray-400">suppo example.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center w-full">
                            <img
                                src={icon2}
                                alt="Contact"
                                className="rounded-lg shadow-lg mx-auto max-w-screen-md"
                            />
                            <h3 className="font-bold my-2">Address</h3>
                            <div className="py-2">
                                <p className="text-sm md:text-xl text-sm text-gray-400">Dhaka, Bangladesh</p>
                                <p className="text-sm md:text-xl text-sm text-gray-400">1205, Mirpur</p>
                            </div>
                        </div>

                        {/* Office Hour */}
                        <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center w-full">
                            <img
                                src={icon3}
                                alt="Contact"
                                className="rounded-lg shadow-lg mx-auto max-w-screen-md"
                            />
                            <h3 className="font-bold my-2">Office hour</h3>
                            <div className="py-2">
                                <p className="text-sm md:text-xl text-sm text-gray-400">Saturday - Friday</p>
                                <p className="text-sm md:text-xl text-sm text-gray-400">10:30am - 22:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Contact;
