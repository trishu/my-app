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
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux';
import LoadingScreen from './LoadingScreen'


const Product = () => {
    const [products, setProducts] = useState([]);
    const [productsDefault, setProductsDefault] = useState([]);
    let history = useHistory();
    let dispatch = useDispatch();
    const [filterProducts, setFilterProducts] = useState("");
    const [manufacturerSwitch, setManufacturerSwitch] = useState(true);
    const [priceSwitch, setPriceSwitch] = useState(true);
    const [quantitySwitch, setQuantitySwitch] = useState(true);
 

    useEffect(() => {
        console.log("product")
        getAllProducts();
    }, []);


    const getAllProducts = async () => {
        const data = await dispatch(retriveAllProducts());
       if(data.length===0){
           return (<div><LoadingScreen/></div>)
       }
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

    const handleManufacturerSwitch =(e) =>{
        setManufacturerSwitch(e.target.checked);
    }

    const handleQuantitySwitch =(e) =>{
        setQuantitySwitch(e.target.checked);
    }

    const handlePriceSwitch =(e) =>{
        setPriceSwitch(e.target.checked);
    }

    return (
        <>
            <div style={{ margin: "35px" }}>
                <Button variant="success" style={{ margin: "12px" }} onClick={handleAddProduct}><IoMdAdd />Add Product</Button>
                <Button variant="info" style={{ margin: "12px" }} onClick={handleTopProduct}><GoGraph />Top Products</Button>
            </div>
            
                <div style={{ float: 'right', marginRight: "40px", marginTop: "0%" }}>
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
            <div style={{ float: 'right', marginRight: "40px", marginTop: "0%" }}>
                <Form>
                    <Row className="align-items-Right">
                        
                        <Col sm={5} className="my-1">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Manufacturer"
                                checked={manufacturerSwitch}
                                onChange = {handleManufacturerSwitch}
                            />
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Price"
                                checked={priceSwitch}
                                onChange = {handlePriceSwitch}
                                
                            />
                        </Col>
                        <Col sm={4} className="my-1">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Quantity"
                                checked={quantitySwitch}
                                onChange = {handleQuantitySwitch}
                                
                            />
                        </Col>
                    </Row>
                </Form>
                </div>
            <div style={{ margin: "35px" }}>

                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Id #</th>
                            <th>Product Name</th>
                            {manufacturerSwitch?<th>Manufacturer</th>:null}
                            {priceSwitch?<th>Price</th>:null}
                            {quantitySwitch?<th>Quantity</th>:null}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length ? products.map((data, index) => (
                            <ProductRow rowdata={data} key={index} manufacturerSwitch={manufacturerSwitch} priceSwitch={priceSwitch} quantitySwitch={quantitySwitch} />
                        )) : null}
                    </tbody>
                </Table>
                {!(products.length) ? <div style={{ marginLeft: "40%" }}>No Items available to display </div> : null}
            </div>
        </>
    );
}
export default Product;

