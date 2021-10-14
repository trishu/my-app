import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ProductService from '../services/ProductService';
import { useState, useEffect } from 'react';
import { GrView, GrUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal'


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("product")
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        setProducts(await ProductService.getAllProduct());
    }


    return (
        <>
            <div style={{ margin: "35px" }}><Button variant="success" style={{ margin: "12px" }}>Add Product</Button><Button variant="info" style={{ margin: "12px" }}>Top Products</Button></div>
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

const ProductRow = (props, key) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete =()=>{
        console.log("Product got deleted");
        setShow(false);
    }
    return (
        <>
            <tr key={key}>
                <td>{props.rowdata.id}</td>
                <td>{props.rowdata.productName}</td>
                <td>{props.rowdata.productManufacturer}</td>
                <td>{props.rowdata.productPrice}</td>
                <td>{props.rowdata.productQuantity}</td>
                <td><Button variant="info" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }}><GrView /> View</Button><Button variant="primary" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }}><GrUpdate /> Update</Button><Button variant="danger" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }} onClick={handleShow}><RiDeleteBinLine /> Delete</Button></td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Product</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

