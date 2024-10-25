import '../../css/Form.css'; 


const Form = ({ dataForm, handleChangeInput, handleUploadFile, handleSubmitForm }) => {
    return (
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          value={dataForm.name}
          onChange={handleChangeInput}
          placeholder="Nombre"
          required
        />
        <textarea
          name="description"
          value={dataForm.description}
          onChange={handleChangeInput}
          placeholder="Descripción"
          required
        />
        <input
          type="number"
          name="stock"
          value={dataForm.stock}
          onChange={handleChangeInput}
          placeholder="Stock"
          required
        />
        <input
          type="number"
          name="price"
          value={dataForm.price}
          onChange={handleChangeInput}
          placeholder="Precio"
          required
        />
        <input
          type="text"
          name="categoryName"
          value={dataForm.category.name}
          onChange={handleChangeInput}
          placeholder="Nombre de la categoría"
          required
        />
        <input
          type="text"
          name="categoryId"
          value={dataForm.category.id}
          onChange={handleChangeInput}
          placeholder="ID de la categoría"
          required
        />
        <input
          type="file"
          onChange={handleUploadFile}
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>
    );
  };
  
  export default Form;
  