import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full pb-0">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-2/3 rounded-xl" />
                <div className="absolute flex items-center rounded-xl left-0 top-0 h-2/3 bottom-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
                    <div className='text-white w-1/2 p-14 space-y-7'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className="btn btn-active bg-[#FF3811] hover:bg-[#FF3811] text-white border-none mr-3">Discover More</button>
                            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-2/3 rounded-xl" />
                <div className="absolute flex items-center rounded-xl left-0 top-0 h-2/3 bottom-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
                    <div className='text-white w-1/2 p-14 space-y-7'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className="btn btn-active bg-[#FF3811] hover:bg-[#FF3811] text-white border-none mr-3">Discover More</button>
                            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-2/3 rounded-xl" />
                <div className="absolute flex items-center rounded-xl left-0 top-0 h-2/3 bottom-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
                    <div className='text-white w-1/2 p-14 space-y-7'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className="btn btn-active bg-[#FF3811] hover:bg-[#FF3811] text-white border-none mr-3">Discover More</button>
                            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-2/3 rounded-xl" />
                <div className="absolute flex items-center rounded-xl left-0 top-0 h-2/3 bottom-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
                    <div className='text-white w-1/2 p-14 space-y-7'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className="btn btn-active bg-[#FF3811] hover:bg-[#FF3811] text-white border-none mr-3">Discover More</button>
                            <button className="btn btn-outline border-white text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;