import React, { useState } from 'react';
import styles from "./index.module.scss";

const TodoItem = ({ todoData, setListData }) => {
  const { id, todo } = todoData;
  const [isChecked, setChecked] = useState();

  const onHandleDelete = () => {
    const confirmIt = window.confirm("Sei sicuro di voler cancellare?");
    
    if (confirmIt) {
      setListData((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <li className={styles.TodoItem} id={id}>
      <div className={styles.TodoItem__item}>
        <p>{todo}</p>
        <input className={styles.TodoItem__checkbox} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <button onClick={onHandleDelete} className={styles.TodoItem__button}>X</button>
      </div>
    </li>
  );
};

export default TodoItem;
