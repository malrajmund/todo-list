import React, { useState } from "react";
import "./ListModal.scss";
import { createList } from "../../redux/actions/list";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ListModal = ({ name, tasks, className, createList, handler }) => {
  const [listData, setListData] = useState({
    name: name,
    task: tasks ? [...tasks] : [],
  });

  const [newTask, setNewTask] = useState({
    name: "",
    isDone: false,
  });

  const addTask = (e) => {
    e.preventDefault();
    if (listData.task.length > 0) {
      setListData({ name, task: [...listData.task, newTask] });
    } else {
      setListData({ name, task: [newTask] });
    }
  };

  const removeTask = (e) => {
    e.preventDefault();
    console.log(listData.task);
    const data = listData.task.splice(-1);
    console.log(data);
    if (listData.task.length > 0) {
      setListData({ name, task: [...data] });
    } else {
      return null;
    }
  };

  return (
    <div className={"ListModal ListModal--open"}>
      <input
        className='ListModal__input'
        name='name'
        value={listData.name ? listData.name : "List name"}
        onChange={(e) =>
          setListData({ ...listData, [e.target.name]: e.target.value })
        }
      ></input>
      <div className='ListModal__line'></div>
      <div className='ListModal__tasks'>
        {listData.task ? (
          listData.task.map((item) => (
            <div className='ListModal__task' key={item.name}>
              <input
                type='checkbox'
                defaultChecked={item.isDone}
                className='ListModal__checkbox'
              ></input>
              <input
                type='text'
                className='ListModal__taskName'
                defaultValue={item.name}
              ></input>
            </div>
          ))
        ) : (
          <div></div>
        )}
        <form className='ListModal__task'>
          <input
            type='checkbox'
            name='isDone'
            className='ListModal__checkbox'
            checked={newTask.isDone}
            onChange={(e) =>
              setNewTask({ ...newTask, [e.target.name]: e.target.checked })
            }
          ></input>
          <input
            className='ListModal__taskName'
            type='text'
            value={newTask.name}
            placeholder='New task'
            name='name'
            onChange={(e) =>
              setNewTask({ ...newTask, [e.target.name]: e.target.value })
            }
          ></input>
          <div>
            <button
              className='ListModal__button ListModal__button--orange'
              onClick={(e) => {
                addTask(e);
                setNewTask({ name: "", isDone: false });
              }}
              type='submit'
            >
              ADD
            </button>
            <button
              onClick={(e) => {
                removeTask(e);
                setNewTask({ name: "", isDone: false });
              }}
              className='ListModal__button ListModal__button--darkOrange'
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
      <div>
        <button
          className='ListModal__button ListModal__button--gray'
          onClick={handler}
        >
          CANCEL
        </button>
        <button
          className='ListModal__button ListModal__button--orange'
          onClick={(e) => createList(listData)}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

ListModal.propTypes = {
  createList: PropTypes.func.isRequired,
};

export default connect(null, { createList })(ListModal);
