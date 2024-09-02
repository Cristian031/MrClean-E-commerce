import '../styles/Navbar.css';
import logoImg from '../../public/logoMrClean.jpeg';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav>
            <img className="logoMrClean" src={logoImg} alt="logo del negocio mrClean" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Liquidos</a></li>
                <li><a href="#">Plasticos</a></li>
                <li><a href="#">Para tus mascotas</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;
