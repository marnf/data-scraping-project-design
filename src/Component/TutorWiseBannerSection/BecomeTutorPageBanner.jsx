import React from 'react';
import bannerImage from "../../assets/becomeTutorBanner.png";
import bgImage from "../../assets/bgImage.png";
import men from "../../assets/torso of a man with laptop.png";
import network from "../../assets/image 42.png";
import icon from "../../assets/image 37.png";
import research from "../../assets/image 40.png";
import BecomeProForm from './BecomeProForm';

const BecomeTutorPageBanner = () => {
    return (
        <div className="relative container mx-auto">
            {/* First Section */}
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className="text-center bg-cover bg-center bg-no-repeat relative z-20"
            >
                <div className="py-48">
                    <p className="text-xl py-2">
                        Shape the future by becoming a tutor and inspiring the next generation
                    </p>
                    <img className="mx-auto" src={bannerImage} alt="Tutor Banner" />
                    <p className="py-3">
                        Be part of our network of dedicated educators and assist students in reaching their
                        <br />
                        academic aspirations. We’ll connect you with learners in need and provide support
                        throughout your journey.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="absolute top-full -mt-20 left-0 w-full   p-10">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-8 ">
                    {/* Left Side Content */}
                    <div className="w-full md:W-1/2 lg:w-1/2 mx--auto space-y-8">
                        {/* Card 1 */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={men}
                                alt="Network Icon"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="font-bold text-lg">Reach a Wide Network of Students</h3>
                                <p className="text-gray-500">
                                    Connect with motivated students from <br /> diverse backgrounds.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={network}
                                alt="Connect Icon"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="font-bold text-lg">Easily Connect with Students</h3>
                                <p className="text-gray-500">
                                    Effortlessly match with students needing <br />  your expertise.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={icon}
                                alt="Reputation Icon"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="font-bold text-lg">Get Referred and Build Your Reputation</h3>
                                <p className="text-gray-500">
                                    Build credibility through feedback and referrals.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={research}
                                alt="Visibility Icon"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="font-bold text-lg">Increase Your Visibility and Stand Out</h3>
                                <p className="text-gray-500">
                                    Optimize your profile to attract <br />  more students.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Become a Tutor</h3>
                       <BecomeProForm></BecomeProForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTutorPageBanner;





