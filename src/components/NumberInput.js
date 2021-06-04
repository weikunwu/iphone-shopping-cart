import React from "react";
import styled from "styled-components";
import Button from "./Button";

const NumberInput = ({ className, onDecrease, value, onIncrease }) => {
  return (
    <div className={className}>
      <Button onClick={onDecrease}>-</Button>
      <b className="value">{value}</b>
      <Button onClick={onIncrease}>+</Button>
    </div>
  );
};

export default styled(NumberInput)`
  ${Button} {
    padding: 0 0.5rem;
    font-size: 1.3rem;
  }
  .value {
    margin:0 1rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
