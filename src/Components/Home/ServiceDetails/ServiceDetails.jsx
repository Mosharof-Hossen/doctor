import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className = "col-md-4 text-center p-2 mt-md-0">
            <img src= {service.img} alt=""/>
            <h5 className = "my-3">{service.name}</h5>
            <p className= "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum voluptatibus facere animi, expedita quae!</p>
        </div>
    );
};

export default ServiceDetails;