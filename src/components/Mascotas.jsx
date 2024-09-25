import React, { useState } from 'react';
import '../css/Mascotas.css';
import alimentacionConsejo from '../assets/alimentacion-consejo.jpg';
import ejercicioConsejo from '../assets/ejercicio-consejo.jpg';
import higieneConsejo from '../assets/higiene-consejo.jpg';
import { Link } from 'react-router-dom';

function Mascotas() {
    const [mostrarCategoria, setMostrarCategoria] = useState(false); 

    return (
        <main>
            <section className="section-categorias">
                <h2 onClick={() => setMostrarCategoria(!mostrarCategoria)}>
                    Categorías
                </h2>
                {mostrarCategoria && (
                    <ul className="categorias-list">
                        <li>
                            <Link to="/category/perros">Perros</Link>
                        </li>
                        <li>
                            <Link to="/category/gatos">Gatos</Link>
                        </li>
                        <li>
                            <Link to="/category/accesorios">Accesorios</Link>
                        </li>
                    </ul>
                )}
            </section>
            
            <section className="section-consejos">
                <h3><i>Consejos para el Bienestar de tus Mascotas</i></h3>
                <div className="consejo">
                    <h4>Alimentación adecuada</h4>
                    <p>Es importante proporcionar a tu mascota una dieta equilibrada y nutritiva para su salud general.</p>
                    <img src={alimentacionConsejo} alt="Gatito gris disfrutando de su alimento en un tazón" />
                </div>
                <div className="consejo">
                    <h4>Ejercicio regular</h4>
                    <p>Todas las mascotas necesitan ejercicio regular para mantenerse saludables y felices, así que asegúrate de sacar a tu mascota a pasear diariamente.</p>
                    <img src={ejercicioConsejo} alt="Cinco perros emocionados a punto de salir a pasear" />
                </div>
                <div className="consejo">
                    <h4>Higiene y cuidado personal</h4>
                    <p>Mantén a tu mascota limpia y bien cuidada para prevenir enfermedades y mantener su piel y pelaje saludables.</p>
                    <img src={higieneConsejo} alt="Perro bulldog disfrutando de un baño" />
                </div>
            </section>
        </main>
    );
}

export default Mascotas;
