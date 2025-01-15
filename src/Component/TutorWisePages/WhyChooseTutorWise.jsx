import React from "react";
import cardImage from "../../assets/white and blue target.png";
import backgroundImage from "../../assets/BoostSectionBackgroundImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const WhyChooseTutorWise = () => {
    return (
        <div className="container mx-auto px-6 py-12 max-w-screen-lg my-14">
            {/* Why Choose Section */}
            <h1 className="text-3xl font-bold text-center mb-8">Why Choose TutorWise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Easily Connect with Expert Tutors</h2>
                        <p className="text-gray-600">
                            Find the right tutor effortlessly by browsing a wide selection of qualified professionals across various subjects.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Post Your Tutor Requirements</h2>
                        <p className="text-gray-600">
                        Easily post your tutoring needs on our platform and find the best match for your learning goals, without the difficulty of long searches.                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Expand Your Network Through Referrals</h2>
                        <p className="text-gray-600">
                        Expand your professional network and connect with other tutors for mutual growth, collaboration, and knowledge-sharing.
                        </p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Simplify Your Search for Tuition</h2>
                        <p className="text-gray-600">
                        Search for private lessons or online sessions, find suitable options quickly and with ease, tailored to your specific needs.
                        </p>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Post Your Tuition Opportunities </h2>
                        <p className="text-gray-600">
                        Whether you are a tutor looking for students or an institution seeking instructors, posting your available tuition slots has never been simpler.
                        </p>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="bg-white p-6 rounded-lg items-start flex gap-3 lg:flex-row ">
                    <img src={cardImage} alt="Connect Tutors" className="w-14 mb-14 " />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Refer Trusted Tutors or Students</h2>
                        <p className="text-gray-600">
                        Strengthen the community and help students find top-tier educational support, enhancing the overall tutoring experience for everyone.                        </p>
                    </div>
                </div>
            </div>

            {/* Subscription Section */}
            <div
                className="mt-12 p-8 rounded-lg text-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="text-2xl font-bold mb-4">Boost Your Tutoring Success</h2>
                <p className="text-gray-600 mb-6">
                    Expand your tutoring practice quickly by leveraging our platform's tools and resources.
                </p>
                <div className="flex justify-center">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-96 px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-pink-500"
                        />
                        <button className="absolute right-2 top-2 bottom-0 bg-gray-600 text-white h-8 w-8  rounded-full">
                        <MdOutlineKeyboardArrowRight size={25} className="ms-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseTutorWise;
