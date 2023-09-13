import { useContext } from 'react';
import checkOut from '../../assets/images/checkout/checkout.png'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const BookService = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
    const { price, title, img } = service;
    const handleBookingForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customer: name, date, email, price, title, img,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('submit Successfully')
                    form.reset()
                }
            })
    }
    return (
        <div className='md:max-w-7xl mx-auto overflow-auto'>
            <div className='mb-16 w-full relative rounded-lg'>
                <img src={checkOut} alt="" className=' rounded-lg mx-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ' />
                <div>
                    <p className=' text-white text-3xl font-bold absolute rounded-xl flex items-center h-full left-20 top-0 '>Add Service</p>
                </div>
            </div>
            <h2>Book service: {title}</h2>
            <div className="pt-20 pb-20 px-5 mb-20 rounded-md bg-base-200">
                <form onSubmit={handleBookingForm}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="price" defaultValue={'$' + price} placeholder="Service Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Submit" className="btn bg-red-500 hover:bg-red-500 text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;