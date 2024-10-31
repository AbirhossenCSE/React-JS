import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Home</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>User</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Header'>Header</Link>
                
            </nav>
        </div>
    );
};

export default Header;