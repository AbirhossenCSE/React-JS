import { Outlet } from "react-router-dom";
import './Home.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            {/* <h2>This is the home component</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Header'>Header</Link>
                
            </nav>
            <Outlet></Outlet> */}

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;