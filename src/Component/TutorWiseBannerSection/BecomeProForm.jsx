import React from 'react';

const BecomeProForm = () => {
    return (
        <div>
            <form>
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Write your first name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Write your email here"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Write your phone number"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                        <input
                            type="text"
                            id="education"
                            placeholder="Write your education"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-3  md:space-x-4">
                            <select className="w-full md:w-1/2 lg:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Select division</option>
                            </select>
                            <select className="w-full md:w-1/2 lg:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Select district</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        style={{ background: "#F0523A" }}
                        type="submit"
                        className="w-full  text-white rounded-lg p-3 hover:bg-orange-600 transition"
                    >
                        Apply
                    </button>
                </div>

            </form>
        </div>
    );
};

export default BecomeProForm;