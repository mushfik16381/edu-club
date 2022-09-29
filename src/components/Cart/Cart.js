import React, { useEffect, useState } from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {cart} = props;
    const [breaks, setbreaks] = useState(0);

    const breakToTime = (e) =>{
        localStorage.setItem('time', e);
        setbreaks(e);
    }

    useEffect(() =>{
        let value = localStorage.getItem('time');
        if(value){
            setbreaks(value)
        }
    },[])

    let total = 0;
    for(const subject of cart){
        total = total + subject.time
    }

    const endToast = () => {
        toast.success("Activity Completed!",{
            position:"top-center"
        })
    }
    
    
    return (
        <div className='info-details'>
            <div className='person-info'>
                <h2>Mushfik Ahmed</h2>
                <h4>Demra, Dhaka</h4>
            </div>
            <div className='person-details'>
                <div>
                    <h4>75</h4>
                    <h4>Id</h4>
                </div>
                <div>
                    <h4>6.4</h4>
                    <h4>Height</h4>
                </div>
                <div>
                    <h4>17yrs</h4>
                    <h4>Age</h4>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button onClick={() =>breakToTime(20)} className='btn-break'> <h6>20m</h6></button>
                <button onClick={() =>breakToTime(30)} className='btn-break'> <h6>30m</h6></button>
                <button onClick={() =>breakToTime(40)} className='btn-break'> <h6>40m</h6></button>
                <button onClick={() =>breakToTime(50)} className='btn-break'> <h6>50m</h6></button>
                <button onClick={() =>breakToTime(60)} className='btn-break'> <h6>60m</h6></button>
            </div>
            <h3>Reading Details</h3>
            <div className='read-details'>
                <h2>Reading time </h2>
                <p>{total}</p>
            </div>
            <div className='break-details'>
                <h2>Break time </h2>
                <p>{breaks}</p>
            </div>
            <div>
            <button onClick={endToast} className='btn-complete'>
                <p className='btn-text'>Activity Completed</p>
            </button>
            <ToastContainer />
            </div>
            
        
        </div>
    );
};

export default Cart;