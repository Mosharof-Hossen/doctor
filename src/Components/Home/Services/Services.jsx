import React from 'react';
import Fluoride from "../../../images/001-dental.png"
import cavity from "../../../images/tooth (1).png"
import whitening from "../../../images/tooth.png"
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: Fluoride
    },
    {
        name: "Cavity Filling",
        img: cavity
    },
    {
        name: "Teath Whitening",
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-md-0 "style = {{marginTop:"350px"}}>
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1", fontWeight: "bolder" }}>OUR SERVICES</h5>
                <h2 style={{ color: "#3A4256", fontWeight: "bolder" }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" mt-5 row" style={{ width: "80%" }}>
                    {
                        serviceData.map(service => <ServiceDetails service = {service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;