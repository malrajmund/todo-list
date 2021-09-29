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

  const { username, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ username, email, password });
  };

  return (
    <>
      {isAuthenticated ? (
        <Redirect to='/todo-list/ListWrapper' />
      ) : (
        <div className='register'>
          <Link className='register__iconWrapper' to='/todo-list'>
            <div className='register__icon'></div>
          </Link>
          <h1 className='register__h1'>Create a new account</h1>
          <form
            className='register__inputWrapper'
            onSubmit={(e) => onSubmit(e)}
          >
            <input
              className={"register__input"}
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={"register__input"}
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={"register__input"}
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
            <input
              className={"register__input"}
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
