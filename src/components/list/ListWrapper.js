import React from "react";
import ListItem from "./ListItem";
import "./ListWrapper.scss";

const ListWrapper = () => {
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
      <ListItem
        name='ToDo List Name'
        createdAt='18-03-2021'
        completed={15}
        uncompleted={10}
        tasks={[
          {
            name: "task 1",
            isDone: false,
          },
          {
            name: "task 2",
            isDone: false,
          },
        ]}
      />
    </div>
  );
};

export default ListWrapper;
