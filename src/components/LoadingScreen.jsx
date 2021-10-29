import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = () => {
    return (
        <>
            <Spinner animation="border" role="status" style={{marginTop:'50%',marginLeft:'50%'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}
export default LoadingScreen;