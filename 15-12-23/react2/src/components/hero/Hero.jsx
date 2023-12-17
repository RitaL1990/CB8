import Button from '../button/Button'
import './index.css'

const Hero = (props) => {
    return (
    <div className='Hero'>
       
       <div className='Hero__items'>
          <img src={props.imgUrl} alt='Hero image' />
          <h2 className='Hero__text'>{props.title}</h2>
       
       </div>
       <Button textContent="Acquista" color="violet" />
    </div>
  )
}

export default Hero