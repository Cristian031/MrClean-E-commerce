import React from 'react';
import '../css/Button.css';

function Button({ text = "Agregar producto", onClick }) {
  return (
    <div className='button-cart'>
        <button onClick={onClick}>{text}</button>   
    </div>
  );
}

export default Button;
