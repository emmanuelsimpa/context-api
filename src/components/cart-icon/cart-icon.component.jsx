import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../providers/cart/cartProviders';

const CartIcon = () => {
  const { toggleHidden, cartItemCount } = useContext(CartContext)
return(
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItemCount}</span>
  </div>
);
}

export default CartIcon;
