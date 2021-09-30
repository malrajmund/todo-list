import React, { useState } from "react";
import "./ListModal.scss";
import { createList, editList, deleteList } from "../../redux/actions/list";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";

const ListModal = ({
  name,
  tasks,
  createList,
  editList,
  deleteList,
  setAlert,
  handler,
  id,
}) => {
  const [listData, setListData] = useState({
    name: name,
    task: tasks ? [...tasks] : [],
  });

  const [newTask, setNewTask] = useState({
    id: Math.random(),
    name: "",
    isDone: false,
  });

  const addTask = (e) => {
    e.preventDefault();
    if (listData.task.length > 0) {
      setListData({ ...listData, task: [...listData.task, newTask] });
    } else {
      setListData({ ...listData, task: [newTask] });
    }
  };

  const onChange = (e, index) => {
    e.preventDefault();
    let newArray = [...listData.task];
    console.log(newArray);
    if (e.target.type === "checkbox") {
      newArray[index].isDone = e.target.checked;
    } else {
      newArray[index].name = e.target.value;
    }
    setListData({ name: listData.name, task: [...newArray] });
    console.log(listData);
  };

  return (
    <div className={"ListModal ListModal--open"}>
      <input
        className='ListModal__input'
        name='name'
        value={listData.name}
        onChange={(e) =>
          setListData({ ...listData, [e.target.name]: e.target.value })
        }
      ></input>
      <div className='ListModal__line'></div>
      <div className='ListModal__tasks'>
        {listData.task ? (
          listData.task.map((item, index) => (
            <div className='ListModal__task' key={item.id}>
              <input
                type='checkbox'
                name='isDone'
                key={Math.random()}
                checked={item.isDone}
                className='ListModal__checkbox'
                onChange={(e) => onChange(e, index)}
              ></input>
              <input
                type='text'
                name='name'
                className='ListModal__taskName'
                value={item.name}
                onChange={(e) => onChange(e, index)}
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
              disabled={
                newTask.name === "" || newTask.name.length <= 0 ? true : false
              }
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
                setNewTask({ name: "", isDone: false });
                e.preventDefault();
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
          onClick={(e) => {
            id ? editList(id, listData) : createList(listData);
            handler();
          }}
          disabled={
            listData.task.length === 0 || listData.name.length <= 0
              ? true
              : false
          }
        >
          SAVE
        </button>
        <button
          className='ListModal__button ListModal__button--darkOrange'
          onClick={(e) => {
            deleteList(id);
            handler();
          }}
          disabled={!tasks ? true : false}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

ListModal.propTypes = {
  createList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { createList, editList, deleteList, setAlert })(
  ListModal
);
