import axios from "axios";

class ProductService {
  static getAllProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      const data = await response.data;
      return data;
    }
    catch (error) {
      console.log(error); // catches both errors
    }
  }
  static getProductById = async (prodId) => {
    let url = "http://localhost:3001/products?id="+prodId;
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    }
    catch (error) {
      console.log(error); // catches both errors
    }
  }

}

export default ProductService