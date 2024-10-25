import Header from "./Header";
// import HomeSection from "./HomeSection";
import { Outlet } from "react-router-dom";
const Layout = () =>{
    return(
        <div>
            <Header />
            {/* <HomeSection /> */}
            <Outlet />
            <h1>Footer</h1>
        </div>
    )
}

export default Layout;