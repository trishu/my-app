import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ProductService from '../services/ProductService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from "react-redux";
import { retriveProduct,updateProduct} from '../actions/product'


const UpdateProduct = () => {
    const location = useLocation();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productManufacturer, setProductManufacturer] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productViewCount, setProductViewCount] = useState(0);
    const [productId, setProductId] = useState('');
    const [addProductError, setAddProductError] = useState('');
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
            setProductViewCount(data.productViews);
        }
        )();
    }, [location]);


    const handleBack = () => {
        history.push('/product');
    }

    const handleProductName = (e) => {
        setProductName(e.target.value);
    }

    const handleProductPrice = (e) => {
        setProductPrice(e.target.value);
    }

    const handleProductManufacturer = (e) => {
        setProductManufacturer(e.target.value);
    }

    const handleProductQuantity = (e) => {
        setProductQuantity(e.target.value);
    }

    const handleProductDescription = (e) => {
        setProductDescription(e.target.value);
    }

    const handleSave = async(e) => {
        e.preventDefault();

        setAddProductError();

        if (productName.length !== 0 && productPrice.length !== 0 && productQuantity.length !== 0 && productManufacturer.length !== 0 && productDescription.length !== 0) {
            const product = {
                "productName": productName,
                "productPrice": productPrice,
                "productQuantity": productQuantity,
                "productManufacturer": productManufacturer,
                "productDescription": productDescription,
                "productViews":productViewCount
            }
            let data = await dispatch(updateProduct(location.state.id,product));
            if (data.length !== 0) {
                history.push('/product')
            }
            else {
                setAddProductError("Product Update Operation failed. Please try again");
            }
        }
        else if (productName.length === 0 && productPrice.length !== 0 && productQuantity.length !== 0 && productManufacturer.length !== 0 && productDescription.length !== 0) {
            setAddProductError('Product Name is required')
        }
        else if (productName.length !== 0 && productPrice.length === 0 && productQuantity.length !== 0 && productManufacturer.length !== 0 && productDescription.length !== 0) {
            setAddProductError('Product Price is required')
        }
        else if (productName.length !== 0 && productPrice.length !== 0 && productQuantity.length === 0 && productManufacturer.length !== 0 && productDescription.length !== 0) {
            setAddProductError('Product Quantity is required')
        }
        else if (productName.length !== 0 && productPrice.length !== 0 && productQuantity.length !== 0 && productManufacturer.length === 0 && productDescription.length !== 0) {
            setAddProductError('Product product Manufacturer is required')
        }
        else if (productName.length !== 0 && productPrice.length !== 0 && productQuantity.length !== 0 && productManufacturer.length !== 0 && productDescription.length === 0) {
            setAddProductError('Product product Description is required')
        }
        else{
            setAddProductError('All Fields are required. please enter')
        }
    }

    return (
        <>
            <Card style={{ width: '40rem', marginLeft: '30%', marginTop: '2%' }}>
                <Card.Header className="text-center"><span>Update Product</span></Card.Header>
                <Card.Body>
                <div id="updateProdErr" style={{ color: 'red' }}>{addProductError} </div>
                    <Form onSubmit={handleSave}>
                        <Form.Group className="mb-2" as={Row} controlId="productID">
                            <Form.Label column sm="6">Product Id :</Form.Label>
                            <Col sm="4">
                                <Form.Control required plaintext readOnly value={productId} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productName">
                            <Form.Label column sm="6">Product Name :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" value={productName} onChange={handleProductName} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productPrice">
                            <Form.Label column sm="6">Product Price :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" value={productPrice} onChange={handleProductPrice} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productManufact">
                            <Form.Label column sm="6">Product Manufacturer :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" value={productManufacturer} onChange={handleProductManufacturer} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productQuantity">
                            <Form.Label column sm="6">Product Quantity :</Form.Label>
                            <Col sm="4">
                                <Form.Control required type="Text" value={productQuantity} onChange={handleProductQuantity} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productDescription">
                            <Form.Label column sm="6">Product Description :</Form.Label>
                            <Col sm="4">
                                <Form.Control type="Text" as="textarea" rows={3} value={productDescription} onChange={handleProductDescription} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Row} controlId="productViews">
                            <Form.Label column sm="6">Product View Count :</Form.Label>
                            <Col sm="4">
                                <Form.Control required plaintext readOnly value={productViewCount} />
                            </Col>
                        </Form.Group>
                        <Button variant="secondary" onClick={handleBack} style={{ float: 'left', marginLeft: '40%' }}>
                            Back
                        </Button>

                        <Button variant="primary" type="submit" style={{ float: 'right', marginRight: '40%' }}>
                            Save
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default UpdateProduct;