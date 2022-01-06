import React from "react";
import './Checkout.css';
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import BoughtItem from "../BoughtItem/BoughtItem";

function Checkout(){ //THIS WILL BE CHANGED

    const [{basket, user}, dispatch] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt="" 
                    className="checkout_ad" 
                />
                <h3 className="checkout_hello">Hello, {user? user.email : 'Guest'}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2> 

                {basket.map((item,i) => (
                    <BoughtItem id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} key={i}/>
                ))}
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}
export default Checkout;
