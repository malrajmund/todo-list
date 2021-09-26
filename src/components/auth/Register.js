import React, { useState } from "react";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Register.scss";
import { Redirect } from "react-router-dom";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <>
      {isAuthenticated ? (
        <Redirect to='/ListWrapper' />
      ) : (
        <div className='register'>
          <div
            className='register__iconWrapper'
            onClick={(e) => window.history.back()}
          >
            <div className='register__icon'></div>
          </div>
          <h1 className='register__h1'>Create an new account</h1>
          <form
            className='register__inputWrapper'
            onSubmit={(e) => onSubmit(e)}
          >
            <input
              className='register__input'
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className='register__input'
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className='register__input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className='register__input'
              type='password'
              placeholder='Repeat password'
            ></input>
            <button className='register__button' type='submit'>
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
