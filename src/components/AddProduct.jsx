import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ProductService from '../services/ProductService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AddProduct = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productManufacturer, setProductManufacturer] = useState('');
    const [productDescription, setProductDescription] = useState('');
    let history = useHistory();

    const handleBack = () =>{
        history.push('/product');
    }

    const handleProductName=(e)=>{
        setProductName(e.target.value);
    }
    
    const handleProductPrice = (e) =>{
        setProductPrice(e.target.value);
    }
    
    const handleProductManufacturer = (e) =>{
        setProductManufacturer(e.target.value);
    }

    const handleProductQuantity = (e) =>{
        setProductQuantity(e.target.value);
    }

    const handleProductDescription = (e) =>{
        setProductDescription(e.target.value);
    }

    const handleSave = (e) =>{
        e.preventDefault();
        
    }

    return (
        <>
            <Card style={{ width: '40rem', marginLeft: '30%', marginTop: '2%' }}>
                <Card.Header className="text-center"><span>Add Product</span></Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSave}>

                        <Form.Group className="mb-2" as={Row} controlId="productName">
                            <Form.Label column sm="6">Product Name :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" onChange ={handleProductName} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productPrice">
                            <Form.Label column sm="6">Product Price :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" onChange ={handleProductPrice} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productManufact">
                            <Form.Label column sm="6">Product Manufacturer :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" onChange ={handleProductManufacturer} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productQuantity">
                            <Form.Label column sm="6">Product Quantity :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" onChange={handleProductQuantity} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productDescription">
                            <Form.Label column sm="6">Product Description :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" as="textarea" rows={3} onChange={handleProductDescription} />
                            </Col>
                        </Form.Group>
                            <Button variant="secondary" onClick = {handleBack} style={{float:'left',marginLeft:'40%'}}>
                                Back
                            </Button>
                        
                            <Button variant="primary" type="submit" style={{float:'right',marginRight:'40%'}}>
                                Save
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default AddProduct;