import { useState} from 'react';
import { GrView, GrUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

const ProductRow = (props, key) => {
    const [show, setShow] = useState(false);
    const prodId = props.rowdata.id;
    let history = useHistory();

    const handleDeleteClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);
    const handleDelete = () => {
        console.log(prodId);
        console.log("Product got deleted");
        
        setShow(false);
    }
    const handleViewProd = () => {
        console.log(prodId);
        history.push('/productDetail', {id: prodId});
        console.log("Product got viewed");
    }
    const handleUpdateProd = () => {
        console.log(prodId);
        console.log("Product got updated");
        history.push('/updateProduct', {id: prodId});
    }
    return (
        <>
            <tr key={key}>
                <td>{props.rowdata.id}</td>
                <td>{props.rowdata.productName}</td>
                <td>{props.rowdata.productManufacturer}</td>
                <td>{props.rowdata.productPrice}</td>
                <td>{props.rowdata.productQuantity}</td>
                <td>
                    <Button variant="info" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }} onClick={handleViewProd}><GrView /> View</Button>
                    <Button variant="primary" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }} onClick={handleUpdateProd}><GrUpdate /> Update</Button>
                    <Button variant="danger" size="sm" style={{ marginRight: "10px", marginLeft: "10px" }} onClick={handleDeleteShow}><RiDeleteBinLine /> Delete</Button>
                </td>
            </tr>
            <Modal show={show} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Product</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
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
export default ProductRow;