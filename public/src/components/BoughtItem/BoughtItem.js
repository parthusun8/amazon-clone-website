import React from 'react';
import './BoughItem.css'
import { useStateValue } from '../StateProvider/StateProvider';

function BoughtItem({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const remove = ()=>{
        dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    });
    }

    return (
        <div className='bought'>
            <img src={image} alt="" className='image_checkout' />

            <div className="checkout_info">
                <p className="checkout_title">
                    {title}
                </p>

                <p className="checkout_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkout_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>

                <button onClick={remove}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default BoughtItem;
