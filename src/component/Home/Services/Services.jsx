import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([{
        name:"Financial Planning Consultation",
        description:"Receive expert guidance on managing your finances, including budgeting, investment strategies, retirement planning, and wealth management."
    },{
        name:"Legal Advice Session",
        description:"Consult with experienced attorneys for legal advice on various matters, such as family law, business contracts, real estate, or personal injury. Get answers to your legal questions and understand your rights.",
        price:"100 per consultation"
    },{
        name:"Wellness and Nutrition Coaching",
        description:"Work with certified wellness coaches to achieve your health and fitness goals. Receive personalized nutrition plans, fitness routines, and lifestyle advice to improve your overall well-being.",
        price:"75 per session"
    },{
        name:"Career Development Consultation",
        description:"Explore your career options and receive guidance on choosing the right path. Our career counselors can help you with resume building, job search strategies, interview preparation, and skill development.",
        price:"80 per session"
    },{
        name:"Mental Health Counseling & Consultation",
        description:"Access professional mental health support from licensed therapists. Discuss and address concerns related to stress, anxiety, depression, relationships, and personal growth in a safe and confidential environment.",
        price:"120 per therapy session"
    }])

    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center">
                {
                    services?.map((service, id) => <Service key={service._key + id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;