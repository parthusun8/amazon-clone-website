import React from 'react'
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import { Link } from "react-router-dom";
import './Subtotal.css'
// import history from '../History/history';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    // let totalPrice = 0;
    // basket?.forEach(element => {
    //     totalPrice += element.price;
    // });

    
    return (
        <div className="subtotal">
            <p>
                {/* Subtotal ({basket?.length} items): <strong>${parseFloat(totalPrice).toFixed(2)} </strong> */}
                Subtotal ({basket?.length} items): <strong>${parseFloat(getBasketTotal(basket)).toFixed(2)} </strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" name="" id="" />
                    This order contains a gift
            </small>

            <Link to={'../payment'} >
                <button className="subtotal_button">Proceed To checkout</button>
            </Link>
        </div>
    );
}

export default Subtotal;
