import React from 'react';
import './Subjects.css'

const Subjects = (props) => {
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
        </div>
    );
};

export default Subjects;