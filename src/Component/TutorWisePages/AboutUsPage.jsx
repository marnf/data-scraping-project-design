import React from "react";
import background from "../../assets/aboutUsPageBgImage.png";
import missionIcon from "../../assets/mission.png";
import visionIcon from "../../assets/visionIcon.png";
import valuesIcon from "../../assets/valuesIcon.png";
import illustration from "../../assets/aboutUsBanner.png";

const AboutUsPage = () => {
    return (
        <div  style={{ backgroundImage: `url(${background})` }} className=" text-gray-800 container mx-auto max-w-screen-lg bg-contain bg-no-repeat">
    {/* Background Image */}
    {/* <div
        className="absolute top-0 left-0 w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover max-w-screen-lg bg-center -z-10 "
        style={{ backgroundImage: `url(${background})` }}
    ></div> */}

    {/* About Us Section */}
    <div className="px-6 md:px-12 lg:px-20 py-12 text-center bg-transparent rounded-xl max-w-screen-lg mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4">
        <div className="text-start order-2 md:order-1">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600 mb-6">
                Tutorwise is a leading tutoring platform in Bangladesh that connects <br />
                students with qualified tutors for personalized educational support. <br />
                Our mission is to provide accessible and high-quality tutoring
                services across a wide range of academic subjects.
            </p>
            <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300">
                Register
            </button>
        </div>
        <img
            src={illustration}
            alt="Illustration"
            className="mt-8 w-64 mx-auto order-1 md:order-2"
        />
    </div>

    {/* Mission, Vision, Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-6 md:px-12 lg:px-20 max-w-screen-lg mx-auto">
        {/* Mission Card */}
        <div className="bg-white p-6 rounded-lg shadow-md rounded-tl-6xl ">
            <img src={missionIcon} alt="Mission Icon" className="w-12 mb-4" />
            <h2 className="text-xl font-bold mb-2">Mission</h2>
            <p className="text-gray-600">
                Tutorwise envisions becoming one of the most trusted and effective
                platforms in Bangladesh for personalized tutoring and educational
                support. We aim to empower students by providing tailored
                educational services that help them succeed academically and
                personally.
            </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-6 rounded-lg shadow-md rounded-tl-6xl">
            <img src={visionIcon} alt="Vision Icon" className="w-12 mb-4" />
            <h2 className="text-xl font-bold mb-2">Vision</h2>
            <p className="text-gray-600">
                Our mission is to bridge the gap between students and quality
                educators by offering convenient, accessible, and effective tutoring
                services. Tutorwise strives to create a learning environment that
                caters to the individual needs of each student, helping them reach
                their full potential.
            </p>
        </div>

        {/* Values Card */}
        <div className="bg-white p-6 rounded-lg shadow-md rounded-tl-6xl">
            <img src={valuesIcon} alt="Values Icon" className="w-12 mb-4" />
            <h2 className="text-xl font-bold mb-2">Values</h2>
            <ul className="text-gray-600 space-y-2">
                <li>Facilitating Easy Access to Education</li>
                <li>Ensuring Quality and Expertise</li>
                <li>Personalized Learning Experiences</li>
                <li>Building a Strong Educational Community</li>
            </ul>
        </div>
    </div>
</div>

    );
};

export default AboutUsPage;
