import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = () => {
    return (
        <>
        <div style ={{marginLeft:'50%',marginTop:'15%'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        </>
    );
}
export default LoadingScreen;