import styles from './index.module.scss'
import { Link } from 'react-router-dom'

export default function Copyright () {
  return (
    <div className={styles.copyright}>
        <div className={styles.bocCopy}>
            <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/external-book-online-learning-itim2101-lineal-color-itim2101.png"
            alt='Icon copy' />
            <h1>Copyright Rules</h1>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Consequuntur debitis magni inventore harum cumque unde dolores,
          sequi assumenda? Labore, cumque?</p>
        <Link to="/">Back to Home</Link>
    </div>    
  )
}
