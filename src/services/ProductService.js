// import axios from "axios";

// class ProductService {
//   static getAllProduct = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/products');
//       const data = await response.data;
//       return data;
//     }
//     catch (error) {
//       console.log(error); // catches both errors
//     }
//   }
//   static getProductById = async (prodId) => {
//     let url = "http://localhost:3001/products?id="+prodId;
//     try {
//       const response = await axios.get(url);
//       const data = await response.data;
//       return data;
//     }
//     catch (error) {
//       console.log(error); // catches both errors
//     }
//   }

//   static addProduct = (product) => {
//     axios.post('http://localhost:3001/products', product)
//       .then( (response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.data);
//       });
//   }

// }

// export default ProductService

import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

const get = id => {
  return http.get(`/products/${id}`);
};

const create = data => {
  return http.post("/products", data);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const remove = id => {
  return http.delete(`/products/${id}`);
};

const removeAll = () => {
  return http.delete(`/products`);
};

const findByName= name => {
  return http.get(`/products?productName=${name}`);
};

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default ProductService;
