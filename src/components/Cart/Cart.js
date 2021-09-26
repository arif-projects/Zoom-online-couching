import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUsers, faCheckCircle, faUserTie } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    let total = 0;
    for (const teacher of cart) {
        total = total + teacher.price;
    }


    return (
        <div className="cart">
            <h2><FontAwesomeIcon icon={faUsers} /> Teachers Selected: {cart.length}  </h2>
            <h3><FontAwesomeIcon icon={faDollarSign} /> Total Cost: ${total} </h3>
            <h3><FontAwesomeIcon icon={faUserTie} /> Selected teacher list:</h3>
            {
                cart.map(teacherItem =>
                    <div>


                        <h3><FontAwesomeIcon icon={faCheckCircle} /> {teacherItem.name}</h3>

                    </div>
                )

            }

        </div>
    );
};

export default Cart;