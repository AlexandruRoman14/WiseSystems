import React, { Component, useState } from 'react';
import iphone from "../assets/iPhone_Mockup.png";
import '../styles/login.scss';

const Login = () => {
    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        console.log(details);
        setDetails({email:"", password:""})
    }

    return (
        <div className='modal-login'>
            <div className="gradie">
                <div className='gradie-text pt-lg-5'>
                    <p className='title text-center h1 '>Gradie</p>
                    <p className='subtitle text-center h5'>Beautiful gradients in seconds.</p>
                </div>
                <img src={iphone} alt="" className="image text-center"/>
            </div>
            <div className="login px-xxl-6">
                <p className='login-text h1'>Login</p>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label className="" htmlFor="usr">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder='john@example.com'
                        onChange={e => setDetails({...details, email: e.target.value})}
                        value={details.email || ""}
                        />
                    </div>

                    <div className="form-group">
                        <label className="" htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder='At least 8 characters'
                        onChange={(e) => setDetails({...details, password: e.target.value})}
                        value={details.password || ""}
                        />
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            By creating an account, you agree to the <a className='terms'>Terms & Conditions</a>.
                        </label>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-lg btn-primary btn-acc" type="submit" value="create">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;