import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Center.css'

const Center = () => {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    const [cart, setCart] = useState([])


    const handleBtn = (teachersValue) => {
        const newCart = [...cart, teachersValue]
        setCart(newCart);
        // console.log(...cart);
    }


    return (
        <div className="center-container">

            <div className="teacherContainer">
                {/* <h2>Teachers:{teachers.length}</h2> */}

                {
                    teachers.map(teacher => <Teacher
                        key={teacher.key}
                        teacher={teacher}
                        handleBtn={handleBtn}
                    ></Teacher>)
                }
            </div>

            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Center;