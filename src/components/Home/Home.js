import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader} from '@fortawesome/free-solid-svg-icons'
import './Home.css'

const Home = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('subjects.json')
        .then(res => res.json())
        .then(data =>setSubjects(data))
    },[]);
    return (
        <div className='container'>
            <div className="cart-container">
                    <p className='title-text'><FontAwesomeIcon icon={faBookOpenReader}></FontAwesomeIcon> EDU-CLUB</p>
                    <p className='title-details'>Select todays exercise</p>
                    <p>Subject:{subjects.length}</p>
                    
            </div>
            <div className="info-container">
                <p>info</p>
            </div>
        </div>
    );
};

export default Home;