import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    FIND_PRODUCTS_BY_NAME,
    RETRIEVE_ALL_PRODUCTS
  } from '../actions/types'

const initialState = [];

const productReducer = (products = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_PRODUCT:
            return [...products, payload];

        case UPDATE_PRODUCT:
            return products.map((product) => {
                if (product.id === payload.id) {
                    return { ...products, ...payload }
                }
                return products;
            })

        case RETRIEVE_PRODUCT:
            return payload;

        case FIND_PRODUCTS_BY_NAME:
            return payload;

        case DELETE_PRODUCT:
            return products.filter(({ id }) => id !== payload.id);
        
        case RETRIEVE_ALL_PRODUCTS:
            return payload;

        default:
            return products;
    }
}

export default productReducer;