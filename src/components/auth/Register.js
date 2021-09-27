import React, { useState } from "react";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Register.scss";
import { Redirect, Link } from "react-router-dom";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setError] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
  });

  const { username, email, password, password2 } = formData;
  const { usernameError, emailError, passwordError, password2Error } = errors;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    if (username.trim().length === 0) {
      setError((errors) => ({ ...errors, usernameError: "Username is empty" }));
    }
    if (email.trim().length === 0) {
      setError((errors) => ({ ...errors, emailError: "Email is empty" }));
      console.log(errors);
    }
    if (password.trim().length === 0) {
      setError((errors) => ({ ...errors, passwordError: "Password is empty" }));
    }
    if (password2.trim().length === 0) {
      setError((errors) => ({
        ...errors,
        password2Error: "Repeat your password!",
      }));
    }
    if (password !== password2) {
      setError((errors) => ({
        ...errors,
        passwordError: "Passwords doesnt not match!",
      }));
    }
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError({});
    handleValidation();
    register(formData);
  };

  return (
    <>
      {isAuthenticated ? (
        <Redirect to='/ListWrapper' />
      ) : (
        <div className='register'>
          <Link className='register__iconWrapper' to='/'>
            <div className='register__icon'></div>
          </Link>
          <h1 className='register__h1'>Create a new account</h1>
          <form
            className='register__inputWrapper'
            onSubmit={(e) => onSubmit(e)}
          >
            <input
              className={
                usernameError
                  ? "register__input register__input--error"
                  : "register__input"
              }
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={
                emailError
                  ? "register__input register__input--error"
                  : "register__input"
              }
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={
                passwordError
                  ? "register__input register__input--error"
                  : "register__input"
              }
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={
                password2Error
                  ? "register__input register__input--error"
                  : "register__input"
              }
              type='password'
              placeholder='Repeat password'
              value={password2}
              name='password2'
              onChange={(e) => onChange(e)}
            ></input>
            {}
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
