import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import Spinner from '../../Shared/Spinner/Spinner';

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([{
        name:"Vanshdeep Singh",
        address:"134/109 Arya Nagar Block 2",
        description:"Very good consultation app",
    },{
        name:"Anand Kumar",
        address:"102/101 Barbanki Lucknow",
        description:"User firendly app"
    },{
        name:"Suraj Rao",
        address:"105 Sultanpur Road Lucknow",
        description:"Amazing and very easy to use consultation app"
    },{
        name:"Subrat Yeeshu Kumar",
        address:"108/76 Cannt Road New Delhi",
        description:"Best consultation app and team"
    },{
        name:"Shubhankar Nath",
        address:"98 trunk road Banaras",
        description:"Best services providing platform"
    }])
    
    return (
        <section id="testimonial">
            <h4 className="miniTitle text-center">TESTIMONIALS</h4>
            <div className="text-center mb-4">
                <h3 className="sectionTitle">WHAT OUR CLIENTS SAY’S</h3>
            </div>
            <Col md={11} className="mx-auto">
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    
                    {
                        reviews.length === 0 ? 
                            <div className="text-center">
                                <Spinner/>
                            </div>: 
                            reviews.map((review, id) => {
                                return(
                                    <SwiperSlide key={id}>
                                        <Review review={review} key={review._key}/>
                                    </SwiperSlide>
                                )
                        })
                    }
                </Swiper>
            </Col>
        </section>
    );
};

export default Reviews;