import React from "react";
import "./Navbar.scss";
import logoutIcon from "../../utils/logout.svg";

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

export default Navbar;
