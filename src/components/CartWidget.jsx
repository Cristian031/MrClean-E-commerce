import '../css/CartWidget.css';


function CartWidget() {
  return (
    <div className="cart-container">
        <img src='/cart.png' alt="icono de carrito de compra" />
        <span>5</span>
    </div>
  );
}

export default CartWidget;
