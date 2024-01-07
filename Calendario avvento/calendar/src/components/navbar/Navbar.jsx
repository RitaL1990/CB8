import './index.css'

const Navbar = () => {

  return (
    <nav className='Nav'>
      <div className='Nav_box'>
        <img src="https://img.icons8.com/color/96/christmas.png" alt="christmas"/>
        <h2>Calendario Avvento</h2>
      </div>
      <div>
        <ul className='Nav_list'>
            <li>Log in</li>
            <li>Gallery</li>
            <li>About us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar