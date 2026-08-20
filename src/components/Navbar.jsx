import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li >
          <NavLink to='/statistics'>Statistics </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
