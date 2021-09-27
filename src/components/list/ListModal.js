import React from "react";
import "./ListModal.scss";

const ListModal = ({ name, tasks }) => {
  return (
    <div className='ListModal'>
      <div>{name}</div>
      <p>
        {tasks.map((item) => (
          <>
            <div>{item.name}</div>
            <div>{item.isDone.toString()}</div>
          </>
        ))}
      </p>
    </div>
  );
};

export default ListModal;
