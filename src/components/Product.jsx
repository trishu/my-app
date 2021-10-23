import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { GoGraph } from "react-icons/go"
import { FcSearch } from "react-icons/fc"
import ProductRow from './ProductRow'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { retriveAllProducts } from '../actions/product'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


const Product = () => {
    const [products, setProducts] = useState([]);
    const [productsDefault, setProductsDefault] = useState([]);
    let history = useHistory();
    let dispatch = useDispatch();
    const [filterProducts, setFilterProducts] = useState("");

    useEffect(() => {
        console.log("product")
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const data = await dispatch(retriveAllProducts());
        setProducts(data);
        setProductsDefault(data);
    }

    const handleAddProduct = () => {
        history.push('/addProduct');
    }

    const handleTopProduct = () => {
        history.push('/topProducts');
    }

    const handelFilterProductName = (e) => {
        setFilterProducts(e.target.value);
    }

    const handleProductSearch = (e) => {
        e.preventDefault();
        const filteredData = productsDefault.filter(
            product => {
                return (
                    product
                        .productName
                        .trim()
                        .toLowerCase()
                        .includes(filterProducts.trim().toLowerCase())
                );
            }
        );
        console.log(filteredData);
        setProducts(filteredData);
    }

    return (
        <>
            <div style={{ margin: "35px" }}>
                <Button variant="success" style={{ margin: "12px" }} onClick={handleAddProduct}><IoMdAdd />Add Product</Button>
                <Button variant="info" style={{ margin: "12px" }} onClick={handleTopProduct}><GoGraph />Top Products</Button>
            </div>
            <div style={{ float: 'right', marginRight: "40px", marginTop: "-2%" }}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Product Name"
                        aria-label="Product Name"
                        aria-describedby="productName"
                        onChange={handelFilterProductName}
                    />
                    <Button variant="outline-primary" id="productNameSearch" onClick={handleProductSearch}>
                        <FcSearch />
                        Search
                    </Button>
                </InputGroup>
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
                        )) : null}
                    </tbody>
                </Table>
                {!(products.length)?<div style={{marginLeft:"40%"}}>No Items available to display </div>:null}
            </div>
        </>
    );
}
export default Product;

