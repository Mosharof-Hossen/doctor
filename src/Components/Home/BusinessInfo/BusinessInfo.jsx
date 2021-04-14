import React, { Component } from 'react'
import InfoCard from '../InfoCard/InfoCard'
import { faClock,faMapMarked,faPhone } from '@fortawesome/free-solid-svg-icons'


const infoData = [
    {
        title : "Opening Hours" ,
        description : "Lorem ipsum dolor  ",
        icon : faClock ,
        background : "primary"
    },
    {
        title : "Visit our location" ,
        description : "Nandail ,Mymensingh,2290",
        icon : faMapMarked ,
        background : "dark"
    },
    {
        title : "Contact us now" ,
        description : "01757674850" ,
        icon : faPhone ,
        background : "primary"
    }
]

export class BusinessInfo extends Component {
    render() {
        return (
            <section className = "d-flex justify-content-center mt-md-0" style = {{marginTop:"90px"}}>
                <div className =" row" style = {{width:"80%"}}>
                {
                    infoData.map(info => <InfoCard info = {info}></InfoCard>)
                }
                </div>
            </section>
        )
    }
}

export default BusinessInfo
