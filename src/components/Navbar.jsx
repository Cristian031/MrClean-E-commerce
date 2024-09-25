import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className='navBar'>
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
