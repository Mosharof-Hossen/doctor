import React from 'react';
import freatured from "../../../images/Mask Group 3.png"

const FeatureService = () => {
    return (
        <section>
            <div className = "container my-2 pb-md-3 " >
                <div className = "row py-5">
                    <div className = "col-md-5 mb-4 m-md-0">
                        <img className ="img-fluid" src={freatured}  alt=""/>
                    </div>
                    <div className = "col-md-7 align-self-center">
                        <h1 style={{ color: "#3A4256", fontWeight: "bolder" }} className = "my-5">Exceptional Dental Care ,on Your Terms</h1>
                        <p className = "text-secondary my-5">Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit adipisci voluptates nam odio architecto consectetur saepe sint, asperiores impedit nemo. sit amet consectetur, adipisicing elit. Molestias, non eaque repellendus minus nostrum tempora eius. Modi soluta dolorum atque et quod! Animi harum accusantium repellat ducimus praesentium modi voluptatibus nobis temporibus, quisquam quos molestias rem quibusdam. Harum, voluptas officia voluptatem illo dicta dolor tempora, nulla in ratione vero iusto!</p>
                        <button className = "btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;