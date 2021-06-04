import { phones } from './assets/data.json';
import * as Actions from "./actions";

const createProductID = (phoneID, memory) => {
    return `${phoneID},${memory}`;
}

const initialState = {
    cart: {
        // productID: {
        //     phoneID,
        //     productID,
        //     price,
        //     name,
        //     memory,
        //     count
        // }
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_TO_CART: {
            const { phoneID, memory, count } = action.payload;
            const item = phones.find((phone) => phone.id === phoneID);
            const name = item.name;
            const price = item.models.find((phone) => phone.memory === memory).price;
            const productID = createProductID(phoneID, memory);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [productID]: state.cart[productID]
                        ? {
                            ...state.cart[productID],
                            count: state.cart[productID].count + count
                        }
                        : {
                            phoneID,
                            productID,
                            price,
                            name,
                            count,
                            memory
                        }
                }
            }
        }

        case Actions.REMOVE_FROM_CART: {
            const { phoneID, memory } = action.payload;
            const productID = createProductID(phoneID,memory);
            return {
                ...state,
                cart:{
                    ...state.cart,
                    [productID]:undefined
                }
            }
        }

        case Actions.CHECKOUT: {
            return {
              ...state,
              cart: {}
            };
        }

        default:
            return state;
    }

}

export default reducer;