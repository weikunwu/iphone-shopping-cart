import React from 'react';
import styled from "styled-components";
import { phones } from '../assets/data.json';
import StockListCard from '../components/StockListCard';
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions";

const StockList = ({ className }) => {
    const dispatch = useDispatch();
    const addToCart = (phoneId, memory, count) => {
        dispatch(addToCartAction(phoneId, memory, count));
    };
    return (
        <div className={className}>
            {phones.map((item) => {
                return (
                    <StockListCard
                        key={item.id}
                        id = {item.id}
                        img = {item.image}
                        name = {item.name}
                        models = {item.models}
                        addToCart = {addToCart}
                    />
                );
            })}
        </div>
    );
}

export default styled(StockList)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 0 auto;
    padding: 2rem;
`;