import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div
        className='register__iconWrapper'
        onClick={(e) => window.history.back()}
      >
        <div className='register__icon'></div>
      </div>
      <h1 className='register__h1'>Create an new account</h1>
      <div className='register__inputWrapper'>
        <input
          className='register__input'
          type='text'
          placeholder='Username'
        ></input>
        <input
          className='register__input'
          type='text'
          placeholder='Email'
        ></input>
        <input
          className='register__input'
          type='password'
          placeholder='Password'
        ></input>
        <input
          className='register__input'
          type='password'
          placeholder='Repeat password'
        ></input>
      </div>
      <button className='register__button'>Create</button>
    </div>
  );
};

export default Register;
