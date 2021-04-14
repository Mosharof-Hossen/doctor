import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded  my-5 py-5 "style ={{width:"300px"}}>
            <div className="card-body">
                <p className = "">{testimonial.quote}</p>
            </div>
            <div class="card-footer d-flex align-items-center bg-white justify-content-center ">
                <img className = "mx-3" src={testimonial.img} alt="" width="60"/>
                <div >
                    <h6 className="text-primary"> {testimonial.name}</h6>
                    <p>{testimonial.from}</p>

                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;