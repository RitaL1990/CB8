import Button from '../button/Button'
import './index.css'

const Navbar = ({}) => {
    return (
        <div className='Navbar'>
            <img src='https://img.icons8.com/arcade/64/clapperboard.png'
                 alt='Icone music' />
            <div className='Nav__btn'>
            <Button textContent="Watch Now" color="violet" />
            <Button textContent="Account" color="violet" />
            <Button textContent="Events" color="violet" />
            <Button textContent="Settings" color="violet" />
            <Button textContent="Log out" color="violet" />
            </div>
        </div>
    )
}

export default Navbar