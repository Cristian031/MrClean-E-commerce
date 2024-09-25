import React from 'react';
import '../css/HomePage.css';

function HomePage() {
  return (
    <>
      <h1><i>Bienvenido a MrClean</i></h1>
      <main className="main-index">
          <section className="presentacion">
            <p>Descubre una selección de artículos de limpieza de alta calidad, incluyendo líquidos y plásticos, diseñados para mantener tu hogar impecable y seguro.</p>
            <p>No olvides visitar nuestra sección de mascotas, donde encontrarás alimentos y accesorios para perros y gatos que garantizan su bienestar.</p>
            <p>En Mr Clean, tu satisfacción es nuestra prioridad. ¡Explora y transforma tu hogar hoy!</p>
          </section>
          <div className="consejos-container">
            <h3>Consejos de Limpieza</h3>
            <div className="consejos-cards">
              <div className="consejo-card">
                <h4>Limpieza Regular</h4>
                <p>Mantén un horario de limpieza para evitar acumulaciones.</p>
              </div>
              <div className="consejo-card">
                <h4>Organización</h4>
                <p>Ten un lugar para cada producto de limpieza y mantenlo ordenado.</p>
              </div>
              <div className="consejo-card">
                <h4>Productos Ecológicos</h4>
                <p>Considera usar productos ecológicos para una limpieza más segura.</p>
              </div>
            </div>
          </div>
        <section className="section-compra">
          <h4>¡Realiza tu compra haciendo click! Nunca fue tan fácil</h4>
          <a href="#"><button type="button"> Comprar</button></a>
        </section>
      </main>
    </>
  );
}

export default HomePage;
