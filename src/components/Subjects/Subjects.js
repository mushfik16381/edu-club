import React, { useEffect, useState } from 'react';
import './Subjects.css'

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('subjects.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])
    return (
        <div>
            <h3>subject: {subjects.length}</h3>
        </div>
    );
};

export default Subjects;