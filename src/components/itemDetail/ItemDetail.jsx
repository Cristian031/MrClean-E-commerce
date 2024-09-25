import Button from "../Button"

const ItemDetail = ({articulo}) => {
    return(
    <div className="item-detail">
        <h2>{articulo.name}</h2>
        <img src={articulo.image} alt={articulo.name}/>
        <p>{articulo.description}</p>
        <p>Cantidad disponibles: {articulo.stock} unidades</p>
        <p>${articulo.price}</p>
        <Button/>
    </div>
)}

export default ItemDetail