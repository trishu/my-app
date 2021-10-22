import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ProductService from '../services/ProductService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch} from "react-redux";
import {retriveProduct} from '../actions/product'

const ProductDetail = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productManufacturer, setProductManufacturer] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productId, setProductId] = useState('');
    let history = useHistory();
    let dispatch = useDispatch();


    useEffect(() => {
        console.log(location.state.id);
        (async () => {
            const data = await dispatch(retriveProduct(location.state.id));
            console.log(data);
                setProductId(data.id);
                console.log(data.id);
                setProductName(data.productName);
                setProductPrice(data.productPrice);
                setProductManufacturer(data.productManufacturer);
                setProductQuantity(data.productQuantity);
                setProductDescription(data.productDescription);
            
        }
        )();
    }, [location]);

    const handleBack = () =>{
        history.push('/product');
    }

    return (
        <>
            <Card style={{ width: '32rem', marginLeft: '30%', marginTop: '2%' }}>
                <Card.Header className="text-center"><span>Product Detail</span></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-2" as={Row} controlId="productID">
                            <Form.Label column sm="6">Product Id :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly value={productId} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productName">
                            <Form.Label column sm="6">Product Name :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly value={productName} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productPrice">
                            <Form.Label column sm="6">Product Price :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly value={productPrice} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productManufact">
                            <Form.Label column sm="6">Product Manufacturer :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly value={productManufacturer} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productQuantity">
                            <Form.Label column sm="6">Product Quantity :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext readOnly value={productQuantity} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productDescription">
                            <Form.Label column sm="6">Product Description :</Form.Label>
                            <Col sm="4">
                                <Form.Control plaintext as="textarea" rows={3} readOnly value={productDescription} />
                            </Col>
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="success" onClick = {handleBack}>
                                Back
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}
export default ProductDetail