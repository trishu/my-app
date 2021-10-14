import axios from "axios";

class ProductService {
  static getAllProduct = async ()=>{
    try{
        const response = await axios.get('http://localhost:3001/products');
        const data = await response.data;
        return data;
      }
      catch (error) {
        console.log(error); // catches both errors
        }
  }

}

export default ProductService