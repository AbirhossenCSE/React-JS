import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>This is the home component</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Contact">Contact us</a>
                <a href="/Header">Header</a>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;