import { NavLink } from "react-router-dom"
 
import Wrapper from '../assets/wrappers/Navbar'
 

const NavBar = ()=>{
    return(<>
     <Wrapper>
    <div className="nav-center">
            <span className="logo">MixMaster</span>
            <NavLink className="nav-links" to="/">Home</NavLink>
            <NavLink className="nav-links" to="/about">About</NavLink>
            <NavLink  className="nav-links"to="/NewsLetter">NewsLetter</NavLink>
    </div>
    </Wrapper>
    </>)
}
export default NavBar