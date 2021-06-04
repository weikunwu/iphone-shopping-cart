import React from "react";
import styled from "styled-components";
import Button from "./Button";
import NumberInput from "./NumberInput";

const CartItem = ({
  count,
  memory,
  phoneID,
  className,
  price,
  name,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <div className={className}>
      <div className="info">
        <div>Name: {name}</div>
        <div>Memory: {memory}GB</div>
        <NumberInput
          value={count}
          onIncrease={() => onIncrease(phoneID, Number(memory))}
          onDecrease={() => onDecrease(phoneID, Number(memory), count)}
        />
      </div>
      <div className="price-container">
        <div>Total price: ${price * count}</div>
        <Button onClick={() => onRemove(phoneID, memory)}>Remove</Button>
      </div>
    </div>
  );
};

export default styled(CartItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 16px;
  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      margin-left: 1rem;
    }
  }
  .price-container {
    div {
      margin-bottom: 1rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
