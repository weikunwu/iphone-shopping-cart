import React from "react";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {addToCartAction, removeItemFromCart, checkout } from "../actions";

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cartReducer.cart;
  });

  const dispatch = useDispatch();

  const handleCheckout = ()=>{
    dispatch(checkout());
  };

  const handleRemove = (phoneID, memory) => {
    dispatch(removeItemFromCart(phoneID, memory));
  };

  const handleIncrease = (phoneID, memory) => {
    dispatch(addToCartAction(phoneID, memory, 1));
  };

  const handleDecrease = (phoneId, memory, currentCount) => {
    if (currentCount === 1) {
      dispatch(removeItemFromCart(phoneId, memory));
    } else {
      dispatch(addToCartAction(phoneId, memory, -1));
    }
  };

  const cartArr = Object.values(cart).filter((item) => Boolean(item));
  const total = cartArr.reduce((acc, item) => {
    const itemPrice = item.price * item.count;
    return acc + itemPrice;
  }, 0);
  return (
    <div>
      {cartArr.map((item) => {
        return (
          <CartItem
            key = {item.productID}
            count={item.count}
            memory={item.memory}
            phoneID={item.phoneID}
            price={item.price}
            name={item.name}
            onIncrease = {handleIncrease}
            onDecrease = {handleDecrease}
            onRemove = {handleRemove}
          />
        );
      })}
      <div>Total: ${total}</div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;
