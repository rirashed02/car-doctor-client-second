import pic1 from '../../../assets/images/products/1.png'
import pic2 from '../../../assets/images/products/2.png'
import pic3 from '../../../assets/images/products/3.png'
import pic4 from '../../../assets/images/products/4.png'
import pic5 from '../../../assets/images/products/5.png'
import pic6 from '../../../assets/images/products/6.png'
const Products = () => {
    return (
        <div>
            <div className='text-center my-16 space-y-3'>
                <h4 className='text-red-500 font-bold'>Popular Products</h4>
                <h1 className='text-4xl font-bold'>Browse Our Products</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-8 pt-8">
                        <img src={pic1} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-10  pt-8">
                        <img src={pic2} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-10  pt-8">
                        <img src={pic3} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-10  pt-8">
                        <img src={pic4} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-10  pt-8">
                        <img src={pic5} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  border border-gray-200">
                    <figure className="px-10  pt-8">
                        <img src={pic6} alt="Shoes" className="rounded-xl bg-gray-100 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-2xl text-[#FF3811] font-bold'>$20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;