import Wrapper from "./assets/wrappers/ErrorPage"
import img from "./assets/not-found.svg"
import { Link } from "react-router-dom"
const Error = ()=>{
    return(<>
    <Wrapper>
    <div>
        <img src={img}  />
        <h3>Ohh!</h3>
        <p>We can't seem to find your page you are looking for</p>
        <Link to="/">Back to Home</Link>

    </div>
    </Wrapper>
   
    </>)
}
export default Error