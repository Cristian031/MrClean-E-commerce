import { Link } from "react-router-dom"
import '../../css/Item.css';
import Button from "../Button";

const Item = ({ articulo }) =>{
  return (
    <div key={articulo.id} className="item">
      <img src={articulo.image} alt={articulo.name} />
      <h2>{articulo.name}</h2>
      <Link to = {`/detail/${articulo.id}`} className="detalle-link">Ver descripción</Link>
      <Button/>
    </div>
  ) 
}

export default Item