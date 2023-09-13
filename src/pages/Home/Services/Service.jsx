import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    

    return (
        <div className="mb-20">
            <div className="text-center mb-10">
                <h1 className="text-[#FF3811] font-bold text-lg">Services</h1>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;