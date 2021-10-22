import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ProductService from '../services/ProductService';
import { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import {GoGraph} from "react-icons/go"
import ProductRow from './ProductRow'
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import {retriveAllProducts} from '../actions/product'

const Product = () => {
    const [products, setProducts] = useState([]);
    let history = useHistory();
    let dispatch = useDispatch();

    useEffect(() => {
        console.log("product")
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const data =await dispatch(retriveAllProducts());
        setProducts(data);
    }

    const handleAddProduct = () =>{
        history.push('/addProduct');
    }

    const handleTopProduct = () =>{
        history.push('/topProducts');
    }


    return (
        <>
            <div style={{ margin: "35px" }}>
            <Button variant="success" style={{ margin: "12px" }} onClick={handleAddProduct}><IoMdAdd/>Add Product</Button>
            <Button variant="info" style={{ margin: "12px" }} onClick={handleTopProduct}><GoGraph/>Top Products</Button>
            </div>
            <div style={{ margin: "35px" }}>
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Id #</th>
                            <th>Product Name</th>
                            <th>Manufacturer</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length ? products.map((data, index) => (
                            <ProductRow rowdata={data} key={index} />
                        )) : console.log("No data to display")}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Product;

