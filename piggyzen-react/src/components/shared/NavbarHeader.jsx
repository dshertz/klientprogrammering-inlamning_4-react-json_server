import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className='logo-container'>
              <Link href='/'>
                <i id='piggyzen-logo'></i>
              </Link>
              <Link to='/'>
                <h1 className='logo-text'>PiggyZen</h1>
              </Link>
            </div>
          </li>
          <li>
            <NavLink to='/'>Hem</NavLink>
          </li>
          <li>
            <NavLink to='/overview'>Översikt</NavLink>
          </li>
          <li>
            <NavLink to='/transactions'>Transaktioner</NavLink>
          </li>
          <li>
            <NavLink to='#'>Kategorier</NavLink>
          </li>
          <li>
            <NavLink to='#'>
              <i className='fa-xl fa-solid fa-user'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarHeader;
