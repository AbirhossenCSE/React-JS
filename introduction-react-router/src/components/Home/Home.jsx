import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;