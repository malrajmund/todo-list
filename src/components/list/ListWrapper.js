import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import ListModal from "./ListModal";
import "./ListWrapper.scss";
import { getLists } from "../../redux/actions/list";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ListWrapper = ({ getLists, list: { loading, list }, auth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    if (!auth.loading) {
      getLists();
    }
  }, [auth.loading]);
  return (
    <div className='ListWrapper'>
      <div className='ListWrapper__inputWrapper'>
        <input
          type='text'
          placeholder='Search'
          className='ListWrapper__input'
        ></input>
        <select id='cars' name='Sort by' className='ListWrapper__select'>
          <option value='volvo'>Name</option>
          <option value='saab'>Date</option>
          <option value='fiat'>Complated</option>
          <option value='audi'>Uncomplated</option>
        </select>
      </div>
      {!loading && list ? (
        list.map((item) => (
          <ListItem
            name={item.name}
            createdAt={item.created_at}
            completed={15}
            uncompleted={10}
            tasks={item.task}
            handler={toggleModal}
          />
        ))
      ) : (
        <div></div>
      )}

      <div className='ListWrapper__addButton' onClick={toggleModal}></div>
      {isModalOpen ? (
        <ListModal name='List name' handler={toggleModal} />
      ) : null}
    </div>
  );
};

ListWrapper.propTypes = {
  getLists: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
  auth: state.auth,
});

export default connect(mapStateToProps, { getLists })(ListWrapper);
