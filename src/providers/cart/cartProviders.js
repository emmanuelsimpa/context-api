import React, { useState, useEffect, createContext } from 'react'
import { addItemToCart, filterItemFromCart, getCartItemsCount, getCartItemsTotal, removeAll, removeItemFromCart } from '../../redux/cart/cart.utils'

export const CartContext = createContext({
    hidden: true,
    toggle: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    clearAllItemFromCart: () => {},
    cartItemCount: 0
})

const CartProviders = ({children}) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [cartItemTotal, setCartItemTotal] = useState(0)
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item))
    const clearAllItemFromCart = (item) => setCartItems(removeAll(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)

    useEffect(()=>{
      setCartItemCount(getCartItemsCount(cartItems));
      setCartItemTotal(getCartItemsTotal(cartItems));
    }, [cartItems])
  return (
   <CartContext.Provider value={{hidden, toggleHidden, cartItems, addItem, removeItem, clearItemFromCart, cartItemTotal, cartItemCount, clearAllItemFromCart}}>
        {children}
   </CartContext.Provider>
  )
} 

export default CartProviders