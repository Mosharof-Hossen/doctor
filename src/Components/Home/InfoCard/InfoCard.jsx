import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./InfoCard.css"

const InfoCard = ({ info }) => {
    console.log(info)
    return (
        <div className = "col-md-4 px-1  mt-1">
            <div className={` d-flex justify-content-center align-items-center info-container text-white info-${info.background}`}>
                <div className = "mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;