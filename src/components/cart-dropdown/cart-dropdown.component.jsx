import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../providers/cart/cartProviders';


function Dropdown() {
  let navigate = useNavigate();
  const { cartItems, toggleHidden } = useContext(CartContext)
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length ? 
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem}/>
            )) : 
            <span>Your Cart is empty</span>
          }
        </div>
        
        <CustomButton onClick={() => {
          navigate('/checkout'); 
          toggleHidden()
          }}>
            Checkout
        </CustomButton>
    </div>
  )
}


export default Dropdown