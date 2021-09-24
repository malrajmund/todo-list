import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login__h1'>Login</h1>
      <div className='login__div'>
        <input
          className='login__input'
          type='text'
          placeholder='Email or Username'
        ></input>
        <input
          className='login__input'
          type='password'
          placeholder='Password'
        ></input>
      </div>
      <button className='login__button'>Login</button>
      <p className='login__p'>or</p>
      <a href='/register' className='login__a'>
        create an account
      </a>
    </div>
  );
};

export default Login;
