export const ADD_TO_CART = `ADD_TO_CART`;
export const REMOVE_FROM_CART = `REMOVE_FROM_CART`;
export const CHECKOUT = `CHECKOUT`;

export const addToCartAction = (phoneID, memory, count) => {
    return {
        type: ADD_TO_CART,
        payload: {
            phoneID,
            memory,
            count
        }
    }
};

export const removeItemFromCart = (phoneID, memory) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            phoneID,
            memory,
        }
    }
};

export const checkout = () => {
    return {
        type: CHECKOUT
    };
};
