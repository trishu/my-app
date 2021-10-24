import pageNotFound from '../images/pageNotFound.jpg'

const PageNotFound = () => {
    return (<>
    <div>
    <img src={pageNotFound} alt="page not found" style={{width:'75%',height:'75%',marginLeft:'15%',marginTop:'5%'}}/>
    </div>
    </>);
}

export default PageNotFound;