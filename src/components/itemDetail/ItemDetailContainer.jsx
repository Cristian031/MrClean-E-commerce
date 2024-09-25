import { useState , useEffect } from "react"
import   "../../data/productos"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import productos from "../../data/productos"

const ItemDetailContainer = () => {
  const[articulos, setArticulos] = useState([]);
  const {idArticulo} = useParams();

  useEffect(() => {
      productos
      .then((respuesta) => {
        const newArticulo = respuesta.find((articulo) => articulo.id === parseInt(idArticulo))
        setArticulos(newArticulo)
      })
      .catch(error=>console.log(error))
  },[idArticulo])

  return (
    <ItemDetail articulo={articulos}/>
  )
}

export default ItemDetailContainer