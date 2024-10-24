import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../css/Login.css'; // Asegúrate de importar tu archivo CSS

const Login = () => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Para manejar mensajes de error
  const navigate = useNavigate();
  const auth = getAuth(); // Obtener la instancia de autenticación

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // Iniciar sesión con Firebase
      await signInWithEmailAndPassword(auth, dataForm.email, dataForm.password);
      
      // Redirigir a la ruta deseada
      navigate("/admin/add-product"); // Cambiar a la ruta correcta
    } catch (error) {
      // Manejar errores (ejemplo: credenciales incorrectas)
      setError("Error al iniciar sesión: " + error.message);
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="login-form">
      <h2>Iniciar Sesión como Administrador</h2>
      <input
        type="email"
        name="email" // Agregar el nombre al input
        placeholder="Email"
        value={dataForm.email}
        onChange={handleChangeInput}
        required
      />
      <input
        type="password"
        name="password" // Agregar el nombre al input
        placeholder="Contraseña"
        value={dataForm.password}
        onChange={handleChangeInput}
        required
      />
      <button type="submit">Iniciar Sesión</button>
      {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
    </form>
  );
};

export default Login;
