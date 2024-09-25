import Navbar from "./Navbar"
import '../css/Header.css'

function Header() {
  return (
    <header className="header-index">
        <div>
            <img className="logoMrClean" src='/logoMrClean.jpeg' alt="logo del negocio mrClean" />   
        </div>
        <Navbar/>
    </header>
  );
}

export default Header