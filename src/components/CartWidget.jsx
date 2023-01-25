import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'purple'} />
      <span>{0}</span>
    </div>
  );
};

export default CartWidget;
