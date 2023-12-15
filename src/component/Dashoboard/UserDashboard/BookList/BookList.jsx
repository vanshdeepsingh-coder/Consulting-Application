import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './BookList.css'
import ListSkeleton from '../../../Shared/TableOrder/ListSkeleton';
import { useAppContext } from '../../../../context';
import { BookingsData } from '../../../BookingsData';

const BookList = () => {
    const { state:{user} } =useAppContext();
    const [bookings, setBookings] = useState([]);

    useEffect(()=>
        setBookings(BookingsData)
    ,[])

    const handleDelete = (id, status) => {
        swal({
            title: `${status === 'Done' ? "Remove" : "Cancel"} Booking?`,
            text: `Are you sure! you want to ${status === 'Done' ? "remove booking from your booking List" : "cancel"}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
            } 
          });
    }
    return (
        <div>
            {bookings.length === 0 && <ListSkeleton/>}
            <div className="row px-3">
                {
                    bookings.map(({_id, serviceName,status,description,img}) => {
                        return(<div className="col-md-4" key={_id}>
                            <div className="bookingList">
                                <div className="d-flex justify-content-between">
                                    <img src={img} alt=""/>
                                    <div>
                                        <p className="serviceState" style={{color: '#fff', background: status === 'Pending' ? 'rgb(255 78 96)' : status === 'On going' ? 'rgb(73 146 255)' :'rgb(31 204 123)'}}>{status}</p>
                                    </div>
                                </div>
                                <h6>{serviceName}</h6>
                                <p>{description}</p>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default BookList;