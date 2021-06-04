import React, { useState } from 'react';
import styled from "styled-components";
import Button from './Button';
import NumberInput from './NumberInput';

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const StockListCard = ({
    className,
    id,
    img,
    models,
    name,
    addToCart
}) => {
    const [count, setCount] = useState(1);
    const [memory, setMemory] = useState(models[0].memory);

    const addToCardHandler = () => {
        addToCart(id, memory, count);
    };

    return (
        <div className={className}>
            <div className="img-container">
                <img src={img} alt={name} />
            </div>
            <h3>{name}</h3>

            <select
                name="model" id="model"
                onChange={(e) => { setMemory(e.target.value) }}
            >
                {models.map((item) => {
                    return (
                        <option value={item.memory} key={item.memory}>{`${item.memory}GB - \$${item.price}`}</option>
                    );
                })}
            </select>
            <NumberInput
                onIncrease={() => setCount(count + 1)}
                onDecrease={() => count > 1 && setCount(count - 1)}
                value={count}
            />
            <PriceContainer>
                <div>${models.find((model) => 
                    model.memory === Number(memory)
                ).price*count
                }</div>
                <Button onClick={addToCardHandler}>Add to cart</Button>
            </PriceContainer>
        </div >
    );
};

export default styled(StockListCard)`
    background-color: white;

    text-align: center;

    img {
    margin: auto auto;
    width: 80%;
    }
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 2rem;

    select{
        width:100%;
        margin-bottom:1rem;
    }

    .amount-selector{
        display:flex;
        flex-direction:row;
    }
`;