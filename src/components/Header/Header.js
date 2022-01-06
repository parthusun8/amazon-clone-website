import React from "react";
import "./Header.css";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from "../Firebase/Firebase";


function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  // console.log(user.email);

  const handleAunthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">

      <Link to={"/"}>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt = " "
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* <SearchIcon className="header_searchIcon"/> */}
      </div>

      <div className="header_nav">
        <div onClick={handleAunthentication} className="header_option">
          <span className="header_optionlineOne">Hello { user ? user.email : 'Guest'}</span>
          <Link to={!user && '../login'}>
            <span className="header_optionlineTwo">
            {user ? 'Sign Out' : 'Sign In'}
            </span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionlineOne">Returns</span>
          <span className="header_optionlineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineOne">Your</span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
      </div>

      <div className="option_basket">
        {/* <ShoppingBasketIcon className="header_basketIcon" /> */}
        <Link to="/checkout">
          <FaShoppingBasket id="basket_logo"/>
          <span className="basket_count"> {basket?.length} </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
