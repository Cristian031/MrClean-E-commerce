import '../styles/CartWidget.css';
import cartImg from '../../public/cart.png';

function CartWidget() {
  return (
    <div className="cart-container">
        <img src={cartImg} alt="icono de carrito de compra" />
        <span>5</span>
    </div>
  );
}

export default CartWidget;
