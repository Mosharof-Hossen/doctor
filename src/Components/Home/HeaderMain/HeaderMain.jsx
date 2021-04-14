import React from 'react';
import chair from './../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <main style = {{height:"500px"}} className="row d-flex align-items-center mx-0">
            <div className="col-md-4 offset-md-1 mt-3 p-md-0 p-5">
                <h1 style = {{color:"#3A4256"}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consectetur aperiam voluptatibus dolores laboriosam ad doloribus placeat, optio incidunt ea!</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 ">
                <img src={chair} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;