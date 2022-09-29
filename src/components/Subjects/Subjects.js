import React from 'react';
import './Subjects.css'

const Subjects = (props) => {
    const {handleAddToCart} =props;
    const {img, name, title, clases, time} = props.subject;
    return (
        <div className='subject'>
            <img src={img} alt="" />
            <div className='subject-details'>
            <h3>{name}</h3>
            <p className='title'>{title}</p>
            <p className='clases'>For Class: {clases}</p>
            <p className='time'>Time Expend: {time}Min</p>
            </div>
            <button onClick={() => handleAddToCart(props.subject)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Subjects;