import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader} from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import Subjects from '../Subjects/Subjects';

const Home = () => {
    const [subjects, setsubjects] = useState([]);

    useEffect(() => {
        fetch('subjects.json')
        .then(res => res.json())
        .then(data =>setsubjects(data))
    },[])
    return (
        <div className='container'>
            <div className="cart-container">
                    <p className='title-text'><FontAwesomeIcon icon={faBookOpenReader}></FontAwesomeIcon> EDU-CLUB</p>
                    <p className='title-details'>Select todays exercise</p>
                    <h3>Subject:{subjects.length}</h3>
                    <div className='subject-container'>
                    {
                        subjects.map(subject => <Subjects key={subject.id} subject={subject}></Subjects>)
                    }
                    </div>
                    
            </div>
            <div className="info-container">
                <p>info</p>
            </div>
        </div>
    );
};

export default Home;