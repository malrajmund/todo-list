import React from "react";
import ListModal from "./ListModal";
import "./ListItem.scss";

const ListItem = ({ name, createdAt, completed, uncompleted, tasks }) => {
  return (
    <>
      <div className='ListItem'>
        <div className='ListItem__name'>{name}</div>
        <div className='ListItem__date'>{"Created at: " + createdAt}</div>
        <div className='ListItem__wrapper'>
          <div className='ListItem__completed'>{"Completed: " + completed}</div>
          <div className='ListItem__uncompleted'>
            {"Uncompleted: " + uncompleted}
          </div>
          <div className='ListItem__all'>
            {"All: " + (completed + uncompleted)}
          </div>
        </div>
      </div>
      <ListModal tasks={tasks} name={name}></ListModal>
    </>
  );
};

export default ListItem;
