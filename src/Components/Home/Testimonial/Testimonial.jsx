import React from 'react';
import wilson from "../../../images/Ellipse 1.png"
import ema from "../../../images/Ellipse 2.png"
import eliza from "../../../images/Ellipse 3.png"
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import "./Testimonial.css"

const TestimonialData = [
    {
        quote : "lorem25Elitr clita amet sed kasd sit diam rebum accusam invidunt amet. Eirmod sanctus consetetur consetetur lorem, sit vero nonumy sit justo stet et eirmod. Ea.",
        name : "Wilson Harry",
        from : "California",
        img : wilson
    },
    {
        quote : "lorem25Elitr clita amet sed kasd sit diam rebum accusam invidunt amet. Eirmod sanctus consetetur consetetur lorem, sit vero nonumy sit justo stet et eirmod. Ea.",
        name : "Ema Gomez",
        from : "California",
        img : ema
    },
    {
        quote : "lorem25Elitr clita amet sed kasd sit diam rebum accusam invidunt amet. Eirmod sanctus consetetur consetetur lorem, sit vero nonumy sit justo stet et eirmod. Ea.",
        name : "Eliza Cat",
        from : "California",
        img : eliza
    }
]


const Testimonial = () => {
    return (
        <section className = "testimonials mt-5 ">
            <div className="container ">
                <div className="section-header ml-5">
                    <h5 className = "text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br/> Says</h1>
                </div>
                <div>
                <div className = "card-style" style = {{width:"100%"}}>
                    {
                        TestimonialData.map(testimonial => <TestimonialCard testimonial = {testimonial}></TestimonialCard>)
                    }
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default Testimonial;
