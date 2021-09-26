import React from "react";
import "./Navbar.scss";
import logoutIcon from "../../resources/logout.svg";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";

const Navbar = ({ logout, isAuthenticated }) => {
  return (
    <div className='navbar'>
      <div className='navbar__div'>ToDo-List</div>
      {isAuthenticated ? (
        <img
          className='navbar__img'
          src={logoutIcon}
          alt='logout'
          onClick={(e) => logout()}
        ></img>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
