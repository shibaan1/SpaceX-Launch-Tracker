import { NavLink } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div>
        <p className='brandname'>SPACEX TRACKER</p>
      </div>

      <div className='navlinks'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/statistics'>Statistics </NavLink>
      </div>

    </div>
  )
}

export default Navbar

