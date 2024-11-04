import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Home</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/users'>User</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/Header'>Header</NavLink>

                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>User</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Header'>Header</Link> */}
                
            </nav>
        </div>
    );
};

export default Header;