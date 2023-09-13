import { FaBeer, FaCalendar, FaMap, FaMapMarked, FaPhone } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='bg-black text-white md:flex justify-center py-20 rounded-lg mb-10'>
            <div className='flex items-center mr-28'>
                <div className='text-4xl mr-6'>
                    <FaCalendar className=''></FaCalendar>
                </div>
                <div>
                    <h1>We are open monday-friday</h1>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center md:mr-28'>
                <div className='text-4xl mr-6'>
                    <FaPhone></FaPhone>
                </div>
                <div>
                    <h1>Have a question?</h1>
                    <h2 className='text-2xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='text-4xl mr-6'>
                    <FaMapMarked></FaMapMarked>
                </div>
                <div>
                    <h1>Need a repair? our address</h1>
                    <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;