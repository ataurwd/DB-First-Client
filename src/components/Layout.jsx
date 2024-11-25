import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>Welcome to our mongo DB server website</h1>
            <Outlet/>
        </div>
    );
};

export default Layout;