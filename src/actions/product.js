import {
  CREATE_PRODUCT,
  RETRIEVE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FIND_PRODUCTS_BY_NAME,
  RETRIEVE_ALL_PRODUCTS
} from './types'

import ProductService from '../services/ProductService';

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await ProductService.create(product);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductService.update(id, data);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const retriveAllProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getAll();
    dispatch({
      type: RETRIEVE_ALL_PRODUCTS,
      payload: res.data,
    });
    console.log(Promise.resolve(res.data));
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const retriveProduct = (id) => async (dispatch) => {
  try {
    const res = await ProductService.get(id);
    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.remove(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: {id},
    });
  } catch (err) {
    console.log(err);
  }
}

export const findProductsByName = (Name) => async (dispatch) => {
  try {
    const res = await ProductService.findByName(Name);

    dispatch({
      type: FIND_PRODUCTS_BY_NAME,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}