import { useState } from "react";
import { storage, db } from "../../firebase/firebaseService";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import Form from "./Form";
import '../../css/Form.css'; 

const Dashboard = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    imagen: "",
    category: {
      name: "",
      id: "",
    },
  });
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "categoryName") {
      setDataForm({
        ...dataForm,
        category: { ...dataForm.category, name: value },
      });
    } else if (name === "categoryId") {
      setDataForm({
        ...dataForm,
        category: { ...dataForm.category, id: value },
      });
    } else {
      setDataForm({ ...dataForm, [name]: value });
    }
  };

  const handleUploadFile = (e) => {
    setArchivo(e.target.files[0]);
  };

  const uploadFile = async () => {
    const storageRef = ref(storage, `/images/${dataForm.name}-${Date.now()}`); // Nombre único para la imagen
    try {
      const image = await uploadBytes(storageRef, archivo);
      const url = await getDownloadURL(image.ref);
      return url;
    } catch (error) {
      console.log(error);
      setError("Error al subir la imagen. Intenta nuevamente."); // Manejo de errores
      return null;
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Validación de los campos
    if (!dataForm.name || !dataForm.description || !dataForm.stock || !dataForm.price || !archivo) {
      setError("Por favor completa todos los campos.");
      return;
    }

    const urlImage = await uploadFile();
    if (!urlImage) return; // Detener si no se pudo obtener la URL de la imagen

    const product = {
      ...dataForm,
      image: urlImage, // Asignar la URL de la imagen
    };
    
    // Subir el producto y limpiar el formulario
    await uploadProduct(product);
    clearForm(); // Limpiar el formulario después de agregar el producto
  };

  const uploadProduct = async (product) => {
    const productsRef = collection(db, "products");
    try {
      await addDoc(productsRef, product);
      // Eliminar la redirección
    } catch (error) {
      console.log("Error al subir el producto:", error);
      setError("Error al subir el producto. Intenta nuevamente."); // Manejo de errores
    }
  };

  const clearForm = () => {
    setDataForm({
      name: "",
      description: "",
      stock: "",
      price: "",
      imagen: "",
      category: {
        name: "",
        id: "",
      },
    });
    setArchivo(null); // Reiniciar archivo
    setError(""); // Reiniciar errores
  };

  return (
    <div className="dashboard">
      <h2>Agregar nuevo producto</h2>
      {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
      <Form
        dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleUploadFile={handleUploadFile}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default Dashboard;
