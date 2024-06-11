import { Link,Outlet, useNavigation } from "react-router-dom"
import NavBar from "./component/NavBar"
const HomeLayout = ({name})=>{
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";
    const value = "some value";
    return (<>
    <NavBar/>
        <section className="page">
           {isPageLoading ? <div className="loading" />:<Outlet context={{value}}/>}
        </section>
   
   
    </>)
}
export default HomeLayout