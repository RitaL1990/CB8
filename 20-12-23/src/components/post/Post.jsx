import { useEffect, useState } from 'react'
import './index.css'

const Post = ({ postData }) => {

  const [userInfo, setUserInfo] = useState({})

  const { title, body, tags, reactions, userId } = postData

   useEffect(() => {
      fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
   }, [])

  return (
    <div className="Post">
      <h3 className='Post__title'>{title}</h3>
      <img className="picAuth" src={userInfo.image} alt={userInfo.firstName} />
      <h4 className='Author'>Author: {userInfo.firstName} Age: {userInfo.age} Gender: {userInfo.gender}</h4>
      <p className='Post__content'>{body}</p>
      <div className='Post__info'>
        <div className='Post__info--gift'>
          <span>🎁</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className='Post__info--categories'>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default Post