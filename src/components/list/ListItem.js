import React, { useState } from "react";
import ListModal from "./ListModal";
import "./ListItem.scss";

const ListItem = ({ name, createdAt, completed, uncompleted, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className='ListItem' onClick={toggleModal}>
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
      {isModalOpen ? (
        <ListModal tasks={tasks} handler={toggleModal}></ListModal>
      ) : null}
    </>
  );
};

export default ListItem;
