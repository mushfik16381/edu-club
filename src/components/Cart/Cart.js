import React, { useEffect, useState } from 'react';
import './Cart.css'

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
                    <h4>17Yrs</h4>
                    <h4>Age</h4>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button onClick={() =>breakToTime(10)} className='btn-break'> <h6>20m</h6></button>
                <button onClick={() =>breakToTime(10)} className='btn-break'> <h6>30m</h6></button>
                <button onClick={() =>breakToTime(10)} className='btn-break'> <h6>40m</h6></button>
                <button onClick={() =>breakToTime(10)} className='btn-break'> <h6>50m</h6></button>
                <button onClick={() =>breakToTime(10)} className='btn-break'> <h6>60m</h6></button>
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
            <button className='btn-complete'>
                <p className='btn-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;