import React from "react";
import "./Navbar.scss";
import logoutIcon from "../../resources/logout.svg";
import { connect } from "react-redux";

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className='navbar'>
      <div className='navbar__div'>ToDo-List</div>
      {isAuthenticated ? (
        <img className='navbar__img' src={logoutIcon} alt='logout'></img>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
