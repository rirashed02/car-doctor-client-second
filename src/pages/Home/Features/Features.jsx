import { FaClock } from "react-icons/fa";

const Features = () => {
    return (
        <div className="mt-10">
            <div className="w-1/2 mx-auto space-x-5">
                <h1 className="text-[#FF3811] font-bold text-center">Core Features</h1>
                <h2 className="text-3xl font-bold text-center py-3">Why Choose Us</h2>
                <p className="text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-10">
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">Expert Team</p>
                </div>
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">24/7 Support</p>
                </div>
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">Best Equipment</p>
                </div>
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">100% Guarantee</p>
                </div>
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">Timely Delivery</p>
                </div>
                <div className="border py-4">
                    <FaClock className="text-4xl mx-auto text-red-500 mb-2"></FaClock>
                    <p className="text-lg font-bold text-center">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;

{/* <div className="flex items-center justify-center">
                <div className="border w-40">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">Expert Team</p>
                </div>
                <div className="border w-40 ">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">24/7 Support</p>
                </div>
                <div className="border w-40 ">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">Best Equipment</p>
                </div>
                <div className="border w-40 ">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">100% Guarantee</p>
                </div>
                <div className="border w-40 ">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">Timely Delivery</p>
                </div>
                <div className="border w-40 ">
                    <FaClock className="text-4xl mx-auto text-red-500"></FaClock>
                    <p className="text-lg font-bold text-center">Timely Delivery</p>
                </div>
            </div> */}