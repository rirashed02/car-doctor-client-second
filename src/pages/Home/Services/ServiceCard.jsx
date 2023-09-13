import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service;

    return (
        <div>
            <div className="card sm:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-red-500 font-semibold">${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/bookingService/${_id}`} className="btn bg-white border-none"><FaArrowRight className="text-red-500" ></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;