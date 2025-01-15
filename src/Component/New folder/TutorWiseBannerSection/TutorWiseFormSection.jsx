import { useState } from 'react';

const TutorWiseFormSection = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="max-w-screen-md	 mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
            <h2 className="text-center text-2xl font-semibold mb-6">Let's Talk</h2>
            <form>
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="firstName" className="block mb-2">First Name</label>
                        <input type="text" id="firstName"
                        placeholder='Write your first name here'
                        name="firstName" required className="w-full p-3 border border-gray-300 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder='write your last name here' required className="w-full p-3 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder='write your email here' required className="w-full p-3 border border-gray-300 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder='write your phone number' required className="w-full p-3 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Address Row */}
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2">Address</label>
                    <input type="text" id="address" name="address" placeholder='write your address here' required className="w-full p-3 h-24 border border-gray-300 rounded-md"/>
                </div>

                {/* Message Row */}
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea id="message" name="message" placeholder='write your Message here' required className="w-full p-3 h-32 border border-gray-300 rounded-md"/>
                </div>

                {/* Checkbox */}
                <div className="flex items-center justify-center mb-4 text-center mx-auto">
                    <input type="checkbox" id="agree" name="agree" checked={isChecked} onChange={handleCheckboxChange} className="mr-2"/>
                    <label htmlFor="agree" className="text-sm ">I agree that my submitted data is being collected and stored.</label>
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit" disabled={!isChecked} className={`w-full p-3 rounded-md text-white ${isChecked ? 'bg-orange-700' : 'bg-gray-300 cursor-not-allowed'}`}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TutorWiseFormSection;
