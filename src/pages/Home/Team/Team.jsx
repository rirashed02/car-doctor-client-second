import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import pic1 from '../../../assets/images/team/1.jpg'
import pic2 from '../../../assets/images/team/2.jpg'
import pic3 from '../../../assets/images/team/3.jpg'
const Team = () => {
    return (
        <div className='mt-14'>
            <div className='text-center space-y-5'>
                <h1 className='text-lg font-bold text-[#FF3811]' >Team</h1>
                <h2 className='text-3xl font-bold'>Meet Our Team</h2>
                <p className='text-[#737373] w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    <div className="card w-96 bg-base-100">
                        <figure className="px-10 pt-10">
                            <img src={pic1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-[#737373]'>Engine Expert</p>
                            <div className="flex justify-center">
                                <FaFacebook className=' text-4xl hover:cursor-pointer text-[#395185] mr-2'></FaFacebook>
                                <FaTwitter className=' text-4xl hover:cursor-pointer text-[#55ACEE] mr-2'></FaTwitter>
                                <FaLinkedin className=' text-4xl hover:cursor-pointer text-[#0A66C2] mr-2'></FaLinkedin>
                                <FaInstagram className=' text-4xl hover:cursor-pointer text-orange-600'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100">
                        <figure className="px-10 pt-10">
                            <img src={pic2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-[#737373]'>Engine Expert</p>
                            <div className="flex justify-center">
                                <FaFacebook className=' text-4xl hover:cursor-pointer text-[#395185] mr-2'></FaFacebook>
                                <FaTwitter className=' text-4xl hover:cursor-pointer text-[#55ACEE] mr-2'></FaTwitter>
                                <FaLinkedin className=' text-4xl hover:cursor-pointer text-[#0A66C2] mr-2'></FaLinkedin>
                                <FaInstagram className=' text-4xl hover:cursor-pointer text-orange-600'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src={pic3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-[#737373]'>Engine Expert</p>
                            <div className="flex justify-center">
                                <FaFacebook className=' text-4xl hover:cursor-pointer text-[#395185] mr-2'></FaFacebook>
                                <FaTwitter className=' text-4xl hover:cursor-pointer text-[#55ACEE] mr-2'></FaTwitter>
                                <FaLinkedin className=' text-4xl hover:cursor-pointer text-[#0A66C2] mr-2'></FaLinkedin>
                                <FaInstagram className=' text-4xl hover:cursor-pointer text-orange-600'></FaInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;