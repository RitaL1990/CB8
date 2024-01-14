import { useState } from "react"
import AddTodoInput from './components/addTodoInput'
import TodoList from './components/todoList'
import { list } from "./mocks"
import styles from './App.module.scss'

function App() {
  const [listData, setListData] = useState(list)
  const [isVisible, setVisibility] = useState(false)

  const onHandlePremium = () => setVisibility(true)

  return (
    <div className={styles.App}>
      {/* Conditional Rendering */}
      {
        !isVisible && <button onClick={onHandlePremium} style={{ color: "blue" }}>Passa alla versione Premium (2000$)</button>
      }
      <h1 className={styles.Text}>To-Do List!</h1>
      {isVisible && <AddTodoInput setListData={setListData} />}
      <hr />
      <TodoList list={listData} setListData={setListData} />
    </div>
  )
}

export default App