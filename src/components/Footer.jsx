import '../css/Footer.css';
import mapIcon from '../assets/ubicacion.png';
import contactIcon from '../assets/contacto.png';
import correoIcon from '../assets/correo.png';
import whatsapp from '../assets/whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="../logoMrClean.jpeg" alt="Imagen del logo del negocio petshop" className="footer-logo" />
        <p className="legal-info">Información legal | Política de privacidad<br />© 2024 All rights reserved<br />| Creator: Magallanes Cristian</p>
      </div>
      <div className="footer-center">
        <div className="ubicacion">
          <img src={mapIcon} alt="icono de ubicación" className="footer-icon" />
          <p className="contacto-title">Ubicación</p>
          <p className="contacto-details">Guaymallén, Mendoza</p>
        </div>
        <div className="contacto">
          <img src={contactIcon} alt="icono de contacto" className="footer-icon" />
          <p className="contacto-title">Contacto</p>
          <p className="contacto-details">ARG +54 9 2613568826</p>
        </div>
        <div className="correo">
          <img src={correoIcon} alt="icono de email" className="footer-icon" />
          <p className="contacto-title">Email</p>
          <p className="contacto-details">
            <a href="mailto:mrclean@gmail.com">mrclean@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="icons">
          <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="logo de whatsapp" className="whatsapp-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
