import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { login } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const { identifier, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(identifier, password);
  };

  return (
    <>
      {isAuthenticated ? (
        <Redirect to='/ListWrapper' />
      ) : (
        <div className='login'>
          <h1 className='login__h1'>Login</h1>
          <form onSubmit={(e) => onSubmit(e)} className='login__div'>
            <input
              className={
                isAuthenticated === false
                  ? "login__input login__input--error"
                  : "login__input"
              }
              type='text'
              value={identifier}
              name='identifier'
              onChange={(e) => onChange(e)}
              placeholder='Email or Username'
            ></input>
            <input
              className={
                isAuthenticated === false
                  ? "login__input login__input--error"
                  : "login__input"
              }
              type='password'
              value={password}
              name='password'
              onChange={(e) => onChange(e)}
              placeholder='Password'
            ></input>
            <button className='login__button' type='submit'>
              Login
            </button>
          </form>
          <p className='login__p'>or</p>
          <Link to='/register' className='login__a'>
            create an account
          </Link>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
