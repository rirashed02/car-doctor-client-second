import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-0 md:mb-48">
            <figure className='relative '>
                <img src={person} className='w-3/4 h-full' alt="Person" />
                <img src={parts} className='absolute w-3/5 top-1/2 right-16 border-8 border-white rounded-md' alt="" />
            </figure>
            <div className="w-3/4">
                <div className='space-y-8'>
                    <h1 className=' text-[#FF3811] font-bold'>About Us</h1>
                    <h2 className="text-4xl font-bold w-1/2">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="">
                        <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;