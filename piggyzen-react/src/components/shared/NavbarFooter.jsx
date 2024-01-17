import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarFooter = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <i className='fa-xl fa-solid fa-house'></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/overview'>
              <i className='fa-xl fa-solid fa-chart-pie'></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/transactions'>
              <i className='fa-xl fa-solid fa-wallet'></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='#'>
              <i className='fa-xl fa-solid fa-table-list'></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>
              <i className='fa-xl fa-solid fa-user'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavbarFooter;
