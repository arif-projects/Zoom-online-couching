import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css'
const Teacher = (props) => {
    const { name, Age, img, Subject, price, category } = props.teacher;
    // console.log(props.teacher);
    return (
        <div className="teacher">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Age: {Age}</h3>
            <h3>Profession:{category}</h3>
            <h3>Subject: {Subject}</h3>
            <h3>Sallery: ${price}</h3>
            <button
                onClick={() => props.handleBtn(props.teacher)}
                className="btn"> <FontAwesomeIcon icon={faUserPlus} /> Add Teacher</button>
        </div>
    );
};

export default Teacher;