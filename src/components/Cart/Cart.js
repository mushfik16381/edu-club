import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='info-details'>
            <div className='person-info'>
                <h3>Mushfik Ahmed</h3>
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
                <h6>20M</h6>
                <h6>30M</h6>
                <h6>40M</h6>
                <h6>50M</h6>
                <h6>60M</h6>
            </div>
            <h3>Reading Details</h3>
            <div className='read-details'>
                <h2>Reading time </h2>
                <p>ddd</p>
            </div>
            <div className='break-details'>
                <h2>Break time </h2>
                <p>ddd</p>
            </div>
            <button className='btn-complete'>
                <p className='btn-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;