import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <h1 className="text-center py-5 orange" ><span className="orange">Our Services</span></h1>

            <div className="services container mb-5">
                <div className="row">
                    {
                        services.map(service => <div className="col-md-4 g-4">
                            <div className="cart shadow">
                                <div className="logo-img">
                                    <img className="w-100" src={service.img} alt="" srcset="" />

                                </div>
                                <div className="p-3">
                                    <h5 className="py-2">{service.name}</h5>
                                    <p>{service.detail}</p>
                                    <p>${service.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;