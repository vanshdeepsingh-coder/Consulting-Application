import React, { useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Form, Col, Row, Toast } from 'react-bootstrap';
import './Book.css'
import axios from 'axios';
import ifoIcon from '../../../../Assets/info.svg';
import Checkout from './Checkout';
import { SET_SELECTED_SERVICE, useAppContext } from '../../../../context';

const Book = () => {
    const { state: { selectedService }, dispatch} = useAppContext()
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setServices([{name: 'Web Design (Basic)', price:48},{name: 'Web Design (Standard)', price:78},{name: 'Web Design (Premium)', price:98},{name:'Email Marketing (Basic)', price:39},{name:'Email Marketing (Standard)', price:79},{name:'Email Marketing (Premium)', price:99},{name: 'Graphic Design (Basic)', price:36},{name: 'Graphic Design (Standard)', price:56},{name: 'Graphic Design (Premium)', price:86},{name: 'Web Development (Basic)', price:49},{name: 'Web Development (Standard)', price:69},{name: 'Web Development (Premium)', price:89},{name: 'Search Engine Optimization (Basic)', price:44},{name: 'Search Engine Optimization (Standard)', price:77},{name: 'Search Engine Optimization (Premium)', price:88},{name:'UI Design (Basic)',price:45},{name:'UI Design (Standard)',price:75},{name:'UI Design (Premium)',price:95}])
    },[selectedService.name, dispatch])

    const handleSelection = e => {
        const getService = services.find(({name}) => e.target.value === name)
        dispatch({type: SET_SELECTED_SERVICE, payload: getService})
    }

    const stripePromise = loadStripe('pk_test_51Ii2KaCKKXM4eFaOJWCOr8pS4GVkoCerGCRHefo7hDpLYMcjpGqPNpoeydvFApWXDSSMnfXNzdtwRcF1o8XmTk3H00xDH8wKZc');
    setTimeout(() => {
        setShow(false);
    }, 7000)

    return (
        <div className="bookForm">
            <Toast show={show} onClose={() => setShow(!show)} className="bookToast">
                <Toast.Header>
                    <img src={`${ifoIcon}`} className="rounded mr-2 toastIcon" alt=""/>
                    <strong className="mr-auto">Info</strong>
                    <small> 02 seconds ago</small>
                </Toast.Header>
                <Toast.Body>4242 4242 4242 4242 you can use this card number for testing </Toast.Body>
            </Toast>
            <Row>
                <Col md={6} xs={12} className="my-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Service</Form.Label>
                    <select class="form-select" onChange={handleSelection}>
                        { 
                         services?.map(({id, name}) => <option key={id} value={name}>{name}</option>) 
                        }
                    </select>
                </Col>
                <Col md={6} xs={12} className="my-3">
                        <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                        <div className="priceInput">
                         {selectedService.price + " $"}
                            </div>
                </Col>
            </Row>

            <Elements stripe={stripePromise}>
                <Checkout/>
            </Elements>
        </div>
    );
};

export default Book;