import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import ListModal from "./ListModal";
import "./ListWrapper.scss";
import { getLists, sortLists } from "../../redux/actions/list";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ListWrapper = ({
  getLists,
  sortLists,
  list: { loading, list },
  auth,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [searchInput, setSearch] = useState("");
  const [selectType, setSelectType] = useState([
    "name",
    "created_at",
    "updated_at",
  ]);

  const handleSelectTypeChange = (e) => selectType[e.target.value];

  const countCompleted = (tasks, type) => {
    let completed = 0;
    let uncompleted = 0;
    tasks.task.map((item) => {
      if (item.isDone === true) {
        return completed++;
      } else {
        return uncompleted++;
      }
    });
    return type === "completed" ? completed : uncompleted;
  };

  /* const sortOption = (option, a, b) => {
    if (option === "Name") {
      if (a.firstname < b.firstname) {
        return -1;
      }
      if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    }
  };*/

  useEffect(() => {
    if (!auth.loading) {
      getLists();
    }
  }, [auth.loading, getLists]);
  return (
    <div className={"ListWrapper"}>
      <div className='ListWrapper__inputWrapper'>
        <input
          type='text'
          placeholder='Search'
          name='search'
          className='ListWrapper__input'
          value={searchInput}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <select
          id='options'
          name='Sort by'
          className='ListWrapper__select'
          onChange={(e) => {
            handleSelectTypeChange(e);
            sortLists(e.target.value);
          }}
        >
          {selectType.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      {!loading ? (
        list.map((listItem) =>
          listItem.name
            .toLowerCase()
            .trim()
            .includes(searchInput.toLowerCase().trim()) ? (
            <ListItem
              name={listItem.name}
              createdAt={listItem.created_at}
              completed={countCompleted(listItem, "completed")}
              uncompleted={countCompleted(listItem)}
              tasks={listItem.task}
              handler={toggleModal}
              id={listItem.id}
              key={listItem.id}
            />
          ) : null
        )
      ) : (
        <div className='ListWrapper__loading'></div>
      )}
      {list && list.length === 0 && !loading ? (
        <div className='ListWrapper__info'>Nothing here :/</div>
      ) : null}

      <div className='ListWrapper__addButton' onClick={toggleModal}></div>
      {isModalOpen ? (
        <ListModal name='List name' handler={toggleModal} />
      ) : null}
    </div>
  );
};

ListWrapper.propTypes = {
  getLists: PropTypes.func.isRequired,
  sortLists: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
  auth: state.auth,
});

export default connect(mapStateToProps, { getLists, sortLists })(ListWrapper);
