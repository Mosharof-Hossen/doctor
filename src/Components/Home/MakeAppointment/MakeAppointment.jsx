import React from 'react';
import doctor from "../../../images/5790-removebg.png"
import "./MakeAppointment.css"

const MakeAppointment = () => {
    return (
        <section className = "make-appointment mt-5">
            <div className="container">
                <div className="row">
                    <div className = "col-md-5 d-none d-md-block w-100">
                        <img  src= {doctor} alt=""/>
                    </div>
                    <div className = "col-md-7  text-white py-5">
                        <h5 className = "text-primary">APPOINTMENT</h5>
                        <h1 className = "my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, esse ut dolorem quos officia quidem aspernatur corporis iure consequatur accusantium.</p>
                        <button className = "btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;