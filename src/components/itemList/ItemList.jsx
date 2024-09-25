import React from 'react'
import Item from './Item'
import '../../data/productos.js'

const ItemList = ({articulos}) => {
  return (
    <div className="item-List">
        {
            articulos.map((articulo) => {
                return <Item key={articulo.id} articulo={articulo} />
            })
        }
    </div>
  )
}

export default ItemList