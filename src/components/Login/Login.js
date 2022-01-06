import React, {useState} from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import {auth} from "../Firebase/Firebase";
import history from '../History/history';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //SIGNED IN
                const user = userCredential.user;
                if(user) {
                    history.back();
                }
            })
            .catch((error) => {
                const errorcode = error.code;
                const errorMessage = error.message;
                alert(errorcode, errorMessage);
            });
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //SIGNED IN
                const user = userCredential.user;
                if(user) {
                    history.back();
                }
            })
            .catch((error) => {
                const errorcode = error.code;
                const errorMessage = error.message;
                alert(errorcode, errorMessage);
            })
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>E-mails</h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value)}/>

                    <button type = "submit" className='sign_in' onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By continuing you agree to AMAZON's FAKE Conditions of Use & Privacy Notice.
                </p>

                <div className='sign_up_container'>
                    <h6>New to Amazon ? </h6>
                    <button onClick={register} className='sign_up'>Create your Amazon Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
