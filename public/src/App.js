import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import history from './components/History/history';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './components/Firebase/Firebase';
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from './components/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51KCJrzSErffaDKeGadUmT0RbuyDuELKJxSFLAV1EyUbCDAhv7iWk89MS50m1LdctWvX3rWFVw8dTsRksFXFrp5Ur00laYwz88H"
);

function App() {
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      // console.log('The user is ', authUser);

      if(authUser) {
        //THE USER JUST LOGGED IN/ THE USER WAS LOGGED IN
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes history = {history}>
          <Route path="/" element={<><Header /><Home /></> } />
          <Route path="/checkout" element={<><Header /><Checkout /></> } />
          <Route path="/login" element= {<Login />} />
          <Route path="/payment" element= {
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
