import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader} from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import Subjects from '../Subjects/Subjects';
import Cart from '../Cart/Cart';

const Home = () => {
    const [subjects, setsubjects] = useState([]);
    const [cart, setCart] =useState([])

    useEffect(() => {
        fetch('subjects.json')
        .then(res => res.json())
        .then(data =>setsubjects(data))
    },[]);

    const handleAddToCart = (subject) =>{
        console.log(subject);
        const newCart = [...cart, subject];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="cart-container">
                    <p className='title-text'><FontAwesomeIcon icon={faBookOpenReader}></FontAwesomeIcon> EDU-CLUB</p>
                    <p className='title-details'>Select todays exercise</p>
                    <div className='subject-container'>
                    {
                        subjects.map(subject => <Subjects key={subject.id} subject={subject}
                        handleAddToCart={handleAddToCart}></Subjects>)
                    }
                    </div>
                    
            </div>
            <div className="info-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;