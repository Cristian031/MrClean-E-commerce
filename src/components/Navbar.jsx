import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import CartWidget from './CartWidget';
import { FaUser } from 'react-icons/fa';


function NavBar() {
  return (
    <nav className='navBar'>
      <Link to="/login" className='login-icon'>
          <FaUser/>
        </Link>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Página principal */}
        <li><Link to="/category/liquidos">Líquidos</Link></li> {/* Página de líquidos */}
        <li><Link to="/category/plasticos">Plásticos</Link></li> {/* Página de plásticos */}
        <li><Link to="/Mascotas" >Mascotas</Link></li>
      </ul>
      <CartWidget/> 
    </nav>
  );
}

export default NavBar;
