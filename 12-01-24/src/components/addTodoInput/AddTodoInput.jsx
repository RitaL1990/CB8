import { useState } from "react";
import styles from"./index.module.scss";

const AddTodoInput = ({ setListData }) => {
  const [inputValue, setInputValue] = useState("")

  const onInputChange = (e) => setInputValue(e.target.value)

  const onHandleSubmit = (e) => {
    e.preventDefault()

    setListData((prev) => [...prev, {
      "id": prev.length,
      "todo": inputValue,
      "completed": true,
      "userId": 26
    }])

    setInputValue("")
  }

  return (
    <form className={styles.AddTodoInput} onSubmit={onHandleSubmit}>
      <input className={styles.AddTodoInput__input} type="text" value={inputValue} onChange={onInputChange} placeholder="Write here..." />
      <button className={styles.AddTodoInput__btn} type="submit">ADD</button>
    </form>
  )
}

export default AddTodoInput