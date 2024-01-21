import { useState, useEffect } from 'react'
import BookList from '../../components/bookList'
import { HTTP_GET } from '../../utils/http'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    Promise.all([
      HTTP_GET('/subjects/love.json'),
      HTTP_GET('/subjects/war.json'),
      HTTP_GET('/subjects/adventure.json')
    ]).then(data => setLists(data))
  }, [])

  const [inputValue, setInputValue] = useState ('')

    const handleInput = (e) => {
      setInputValue(e.target.value);
    }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${inputValue}`);
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.navbar}>
      <Link to={`/copyright`}>
        <button>Copyright</button>
      </Link>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInput}
            value={inputValue}
          />
            <input className={styles.btn} type="submit" value="Click" />
        </form>
      </div>
      {lists.map((list, i) => <BookList bookListData={list.works} title={list.name.toUpperCase()} key={i} />)}
    </div>
  )
}
