import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Agregar.css";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    categoryId: "",
    imageUrl: ""
  });

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemCollection = collection(db, "items");

    try {
      await addDoc(itemCollection, product);
      console.log("Producto agregado con éxito");
      // Opcional: Reiniciar el formulario
      setProduct({
        title: "",
        description: "",
        price: 0,
        stock: 0,
        categoryId: "",
        imageUrl: ""
      });
    } catch (error) {
      console.error("Error al agregar el producto: ", error);
    }
  };

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={product.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={product.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={product.price}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="categoryId"
        placeholder="ID de Categoría"
        value={product.categoryId}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="URL de la Imagen"
        value={product.imageUrl}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProductForm;
