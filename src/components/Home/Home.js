import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    className='home_img'
                    alt = ""
                />
            </div>

            <div className="home_row">
                <Product id="123" title="The lean Startup"
                    price = {29.99}
                    image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={5}
                />
                
                <Product id="231" title="Lorem Ipsum Dolo"
                price = {86.56}
                image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={3}
                />

                <Product id="232" title="Startup krle bhai"
                    price = {29.99}
                    image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={4}
                />
            </div>

            <div className="home_row">
                <Product id="233" title="Startup nahi ho rha"
                    price = {29}
                    image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={2}
                />
                
                <Product id="234" title="Lorem Ipsum Dolo"
                price = {22}
                image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={1}
                />
            </div>

            <div className="home_row">
                <Product id="235" title="Nobody Cares"
                    price = {81.66}
                    image="http://pngimg.com/uploads/phone/phone_PNG48888.png" 
                    rating={3}
                />
            </div>
        </div>
    )
}

export default Home;
